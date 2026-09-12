# TikTok Web IM Research

Reverse-engineered snapshot of TikTok Web IM command IDs, HTTP route mappings, protobuf schemas,
enums, and endpoint-like strings extracted from the web client.

> Unofficial research project. Not affiliated with or endorsed by TikTok/ByteDance.
> This repository documents client-side structures observed in a specific web build; they can change at any time.

## Snapshot

| Item | Count |
|---|---:|
| IMCMD commands | 148 |
| Commands with recovered route | 84 |
| Commands without recovered route | 64 |
| Protobuf schemas | 408 |
| Enums | 75 |
| RequestBody fields | 131 |
| ResponseBody fields | 132 |
| Endpoint-like strings | 500 |

Generated from the supplied bundle snapshot at `2026-09-12T09:30:30.537Z`.

## What's in the repo

```text
.
├── data/
│   ├── full-dump.json
│   ├── api-registry.json
│   ├── site-routes.json
│   └── unmapped-commands.json
├── docs/
│   ├── API_INDEX.md
│   ├── PROTOBUF.md
│   ├── RESEARCH_NOTES.md
│   └── UNMAPPED_COMMANDS.md
├── examples/
│   ├── encode-send-body.ts
│   └── inspect-registry.ts
├── scripts/
│   ├── export-api-index.mjs
│   └── tiktok-full-api-dump.js
├── src/
│   ├── api-registry.ts
│   ├── enums.ts
│   ├── index.ts
│   ├── proto-schema.ts
│   └── protobuf.ts
├── .github/workflows/typecheck.yml
├── CONTRIBUTING.md
├── SECURITY.md
├── package.json
└── tsconfig.json
```

## Highlights

The registry includes entries such as:

```text
100   SEND_MESSAGE                  -> v1/message/send
301   GET_MESSAGES_BY_CONVERSATION  -> v1/message/get_by_conversation
706   ACK_MESSAGE                   -> v1/message/ack
2004  GET_MEDIA_URLS                -> v1/media/get_urls
2005  GET_TICKET                    -> v1/conversation/get_ticket
2006  GET_USER_CONVERSATION_LIST    -> v1/conversation/list
2059  GET_MEDIA_UPLOAD_CONFIG       -> v1/media/upload_config
2060  GET_MEDIA_STATUS              -> v1/media/get_status
2200  GET_MESSAGES                  -> v1/message/get
```

For routed commands, `data/api-registry.json` ties together:

```text
cmd
symbol
route
request body field
request protobuf type
request fields
response body field
response protobuf type
response fields
```


## Session / cookies / Worker setup

If you want to use the recovered protocol from a Cloudflare Worker, start here:

1. Log in at `https://www.tiktok.com/messages`.
2. Copy the current authenticated **Cookie** request header from DevTools Network.
3. Store it as a Cloudflare secret:

```bash
npx wrangler secret put TIKTOK_COOKIE
```

4. Do not commit cookies, `msToken`, Ticket Guard values, or browser session exports.
5. Obtain the current web device ID (`wid`) from the authenticated `/messages` hydration data rather than hard-coding it.

Full walkthrough:

- [Session, cookies, `wid`, msToken and secret rotation](docs/SESSION_AND_COOKIES.md)
- [Cloudflare Worker integration](docs/CLOUDFLARE.md)

## TypeScript usage

```ts
import {
  getApiByCmd,
  PROTO_SCHEMAS,
  encodeMessage,
} from "./src/index.js";

console.log(getApiByCmd(301));

const body = encodeMessage(
  "MessagesInConversationRequestBody",
  {
    conversation_id: "example",
    conversation_type: 1,
    conversation_short_id: 123n,
    direction: 1,
    cursor: 0n,
    limit: 20,
  },
  PROTO_SCHEMAS,
);
```

The codec is protobuf-only. It does **not** implement authentication, signing, Ticket Guard,
session handling, WebSocket authentication, or other transport/security mechanisms.

## Regenerating the dump

Open TikTok Web with the relevant IM bundle loaded, then run:

```text
scripts/tiktok-full-api-dump.js
```

The browser-side dumper produces a normalized object containing commands, routes, schemas, enums,
unmapped commands, and endpoint-like strings.

The generated files in this repository are a snapshot, not an official API contract.

## Documentation

- [API index](docs/API_INDEX.md)
- [Protobuf notes](docs/PROTOBUF.md)
- [Commands without recovered routes](docs/UNMAPPED_COMMANDS.md)
- [Research snapshot notes](docs/RESEARCH_NOTES.md)
- [Session and cookies setup](docs/SESSION_AND_COOKIES.md)
- [Cloudflare Worker integration](docs/CLOUDFLARE.md)

## Publishing notes

Before pushing this repository publicly:

- inspect `git diff --cached` for cookies/tokens;
- do not add browser storage/session exports;
- do not publish private captures containing account identifiers;
- choose a license if you want to grant reuse rights. This package intentionally does not select one for you.
