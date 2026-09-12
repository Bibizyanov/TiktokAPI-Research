// Generic schema-driven protobuf codec for the recovered TikTok IM schema.
// This is intentionally transport-agnostic: it only encodes/decodes protobuf payloads.

export type FieldSchema = {
  readonly name: string;
  readonly number: number;
  readonly tag?: number;
  readonly wire: number;
  readonly wireName?: string;
  readonly type: string;
  readonly kind: "scalar" | "message";
  readonly repeated?: boolean;
};

export type MessageSchema = {
  readonly name: string;
  readonly fields: readonly FieldSchema[];
};

export type SchemaRegistry = Readonly<Record<string, MessageSchema>>;

function pushVarint(out: number[], input: bigint): void {
  let value = input;
  if (value < 0n) value = BigInt.asUintN(64, value);

  while (value >= 0x80n) {
    out.push(Number((value & 0x7fn) | 0x80n));
    value >>= 7n;
  }
  out.push(Number(value));
}

function fixed32(value: number): Uint8Array {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setUint32(0, value >>> 0, true);
  return new Uint8Array(buffer);
}

function fixed64(value: bigint): Uint8Array {
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setBigUint64(0, BigInt.asUintN(64, value), true);
  return new Uint8Array(buffer);
}

function float32(value: number): Uint8Array {
  const buffer = new ArrayBuffer(4);
  new DataView(buffer).setFloat32(0, value, true);
  return new Uint8Array(buffer);
}

function float64(value: number): Uint8Array {
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setFloat64(0, value, true);
  return new Uint8Array(buffer);
}

export function encodeMessage(
  typeName: string,
  value: Record<string, unknown>,
  schemas: SchemaRegistry,
): Uint8Array {
  const schema = schemas[typeName];
  if (!schema) throw new Error(`Unknown protobuf type: ${typeName}`);

  const out: number[] = [];

  const emitLengthDelimited = (fieldNumber: number, bytes: Uint8Array): void => {
    pushVarint(out, BigInt((fieldNumber << 3) | 2));
    pushVarint(out, BigInt(bytes.length));
    out.push(...bytes);
  };

  const emitOne = (field: FieldSchema, raw: unknown): void => {
    if (raw === undefined || raw === null) return;

    if (field.kind === "message") {
      emitLengthDelimited(
        field.number,
        encodeMessage(field.type, raw as Record<string, unknown>, schemas),
      );
      return;
    }

    if (field.type === "string") {
      emitLengthDelimited(field.number, new TextEncoder().encode(String(raw)));
      return;
    }

    if (field.type === "bytes") {
      const bytes =
        raw instanceof Uint8Array
          ? raw
          : new Uint8Array(raw as ArrayBuffer | ArrayLike<number>);
      emitLengthDelimited(field.number, bytes);
      return;
    }

    if (field.type === "float") {
      pushVarint(out, BigInt((field.number << 3) | 5));
      out.push(...float32(Number(raw)));
      return;
    }

    if (field.type === "double") {
      pushVarint(out, BigInt((field.number << 3) | 1));
      out.push(...float64(Number(raw)));
      return;
    }

    if (field.type === "fixed32" || field.type === "sfixed32") {
      pushVarint(out, BigInt((field.number << 3) | 5));
      out.push(...fixed32(Number(raw)));
      return;
    }

    if (field.type === "fixed64" || field.type === "sfixed64") {
      pushVarint(out, BigInt((field.number << 3) | 1));
      out.push(...fixed64(BigInt(raw as bigint | number | string)));
      return;
    }

    pushVarint(out, BigInt(field.number << 3));
    if (field.type === "bool") {
      pushVarint(out, raw ? 1n : 0n);
    } else {
      pushVarint(out, BigInt(raw as bigint | number | string));
    }
  };

  for (const field of schema.fields) {
    const raw = value[field.name];
    if (raw === undefined || raw === null) continue;

    if (field.repeated) {
      if (!Array.isArray(raw)) {
        throw new Error(`${typeName}.${field.name} must be an array`);
      }
      for (const item of raw) emitOne(field, item);
    } else {
      emitOne(field, raw);
    }
  }

  return Uint8Array.from(out);
}

class Reader {
  public pos = 0;

  constructor(public readonly bytes: Uint8Array) {}

  eof(): boolean {
    return this.pos >= this.bytes.length;
  }

  varint(): bigint {
    let result = 0n;
    let shift = 0n;

    while (this.pos < this.bytes.length) {
      const byte = this.bytes[this.pos++];
      result |= BigInt(byte & 0x7f) << shift;

      if ((byte & 0x80) === 0) return result;
      shift += 7n;

      if (shift > 70n) throw new Error("Invalid varint");
    }

    throw new Error("Truncated varint");
  }

  take(length: number): Uint8Array {
    const end = this.pos + length;
    if (end > this.bytes.length) throw new Error("Truncated protobuf field");

    const slice = this.bytes.slice(this.pos, end);
    this.pos = end;
    return slice;
  }
}

export function decodeMessage(
  typeName: string,
  bytes: Uint8Array,
  schemas: SchemaRegistry,
): Record<string, unknown> {
  const schema = schemas[typeName];
  if (!schema) throw new Error(`Unknown protobuf type: ${typeName}`);

  const byNumber = new Map(schema.fields.map((field) => [field.number, field]));
  const reader = new Reader(bytes);
  const out: Record<string, unknown> = {};

  const assign = (field: FieldSchema, value: unknown): void => {
    if (field.repeated) {
      const list = (out[field.name] ??= []) as unknown[];
      list.push(value);
    } else {
      out[field.name] = value;
    }
  };

  const skip = (wire: number): void => {
    if (wire === 0) reader.varint();
    else if (wire === 1) reader.take(8);
    else if (wire === 2) reader.take(Number(reader.varint()));
    else if (wire === 5) reader.take(4);
    else throw new Error(`Unsupported wire type: ${wire}`);
  };

  while (!reader.eof()) {
    const tag = Number(reader.varint());
    const fieldNumber = tag >>> 3;
    const wire = tag & 7;
    const field = byNumber.get(fieldNumber);

    if (!field) {
      skip(wire);
      continue;
    }

    if (wire === 0) {
      const value = reader.varint();

      if (field.type === "bool") assign(field, value !== 0n);
      else if (["int32", "uint32", "sint32"].includes(field.type)) {
        assign(field, Number(value));
      } else {
        assign(field, value);
      }
      continue;
    }

    if (wire === 2) {
      const raw = reader.take(Number(reader.varint()));

      if (field.kind === "message") {
        assign(field, decodeMessage(field.type, raw, schemas));
      } else if (field.type === "string") {
        assign(field, new TextDecoder().decode(raw));
      } else {
        assign(field, raw);
      }
      continue;
    }

    if (wire === 5) {
      const raw = reader.take(4);
      const view = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
      assign(
        field,
        field.type === "float"
          ? view.getFloat32(0, true)
          : view.getUint32(0, true),
      );
      continue;
    }

    if (wire === 1) {
      const raw = reader.take(8);
      const view = new DataView(raw.buffer, raw.byteOffset, raw.byteLength);
      assign(
        field,
        field.type === "double"
          ? view.getFloat64(0, true)
          : view.getBigUint64(0, true),
      );
      continue;
    }

    skip(wire);
  }

  return out;
}
