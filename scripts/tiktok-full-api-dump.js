(() => {
  const g = window;

  function getWebpackRequire() {
    if (g.__TT_WEBPACK_REQUIRE__?.m) return g.__TT_WEBPACK_REQUIRE__;

    const candidates = [
      g.webpackChunk_tiktok_web,
      g.webpackChunk_tiktok_webapp,
      g.__LOADABLE_LOADED_CHUNKS__
    ].filter(x => Array.isArray(x) && typeof x.push === 'function');

    for (const chunks of candidates) {
      let req = null;
      try {
        chunks.push([[Math.floor(Math.random() * 1e9)], {}, r => { req = r; }]);
      } catch {}
      if (req?.m) {
        g.__TT_WEBPACK_REQUIRE__ = req;
        return req;
      }
    }
    throw new Error('webpack require not found');
  }

  const req = getWebpackRequire();

  function factorySource(id) {
    try { return Function.prototype.toString.call(req.m[id]); }
    catch { return ''; }
  }

  function findProtoModule() {
    const hits = [];
    for (const id of Object.keys(req.m)) {
      let exp;
      try { exp = req(id); } catch { continue; }
      if (!exp || typeof exp !== 'object') continue;

      for (const [key, val] of Object.entries(exp)) {
        if (!val || typeof val !== 'object') continue;
        const score =
          ('IMCMD' in val ? 50 : 0) +
          ('RequestBody' in val ? 50 : 0) +
          ('ResponseBody' in val ? 50 : 0) +
          ('MessageContent' in val ? 20 : 0) +
          ('MessageType' in val ? 10 : 0);
        if (score >= 100) hits.push({ id, key, val, score });
      }
    }
    hits.sort((a,b) => b.score - a.score);
    if (!hits[0]) throw new Error('protobuf module not found');
    return hits[0];
  }

  const protoHit = findProtoModule();
  const proto = protoHit.val;
  const IMCMD = proto.IMCMD || {};

  function reverseEnumValue(en, num) {
    if (!en || typeof en !== 'object') return '';
    for (const [k,v] of Object.entries(en)) {
      if (typeof v === 'number' && v === num && /^[A-Z0-9_]+$/.test(k)) return k;
    }
    return '';
  }

  function findRouteModules() {
    const hits = [];
    for (const id of Object.keys(req.m)) {
      const src = factorySource(id);
      if (!src) continue;
      let score = 0;
      if (src.includes('v1/message/send')) score += 50;
      if (src.includes('v1/message/get_by_conversation')) score += 40;
      if (src.includes('v1/conversation/list')) score += 30;
      if (src.includes('IMCMD.SEND_MESSAGE')) score += 30;
      if (src.includes('IMCMD.GET_MESSAGES')) score += 20;
      if (score) hits.push({ id, src, score });
    }
    hits.sort((a,b) => b.score - a.score);
    return hits;
  }

  const routeModules = findRouteModules();

  function extractRoutes() {
    const out = [];
    const seen = new Set();

    function add(cmd, symbol, route, moduleId, kind) {
      if (!route) return;
      route = String(route).replace(/^\/+/, '');
      const key = `${cmd ?? ''}|${symbol ?? ''}|${route}`;
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ cmd: cmd ?? null, symbol: symbol || '', route, moduleId: String(moduleId), kind });
    }

    for (const mod of routeModules) {
      const src = mod.src;

      for (const m of src.matchAll(/(?:^|[,;{])\s*(\d+(?:e\d+)?)\s*:\s*["'`]\/?([^"'`]+)["'`]/gi)) {
        const cmd = Number(m[1]);
        const route = m[2];
        if (!/^(?:v\d+\/|tiktok\/v\d+\/)/.test(route)) continue;
        add(cmd, reverseEnumValue(IMCMD, cmd), route, mod.id, 'numeric');
      }

      for (const m of src.matchAll(/\[[^\]]*?IMCMD\.([A-Z0-9_]+)\]\s*:\s*["'`]\/?([^"'`]+)["'`]/g)) {
        const symbol = m[1];
        const cmd = typeof IMCMD[symbol] === 'number' ? IMCMD[symbol] : null;
        add(cmd, symbol, m[2], mod.id, 'symbolic');
      }
    }

    out.sort((a,b) => (a.cmd ?? 1e9) - (b.cmd ?? 1e9) || a.route.localeCompare(b.route));
    return out;
  }

  const routes = extractRoutes();
  const routeByCmd = new Map(routes.filter(x => x.cmd != null).map(x => [x.cmd, x]));

  const SCALAR = new Set([
    'double','float','int32','uint32','sint32','fixed32','sfixed32',
    'int64','uint64','sint64','fixed64','sfixed64','bool','string','bytes'
  ]);

  function wireName(w) {
    return ({0:'varint',1:'fixed64',2:'length-delimited',5:'fixed32'})[w] || `wire-${w}`;
  }

  function encSrc(Type) {
    try { return Function.prototype.toString.call(Type.encode); }
    catch { return ''; }
  }

  function repeatedGuess(src, field) {
    const e = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\.${e}&&[^;]{0,240}\\.${e}\\.length`).test(src) ||
           new RegExp(`\\.${e}\\[[^\\]]+\\]`).test(src);
  }

  function parseType(name, Type) {
    if (!Type || typeof Type.encode !== 'function') return null;
    const src = encSrc(Type);
    if (!src) return null;

    const fields = [];
    const seen = new Set();
    const add = x => {
      const key = `${x.number}|${x.name}|${x.type}`;
      if (seen.has(key)) return;
      seen.add(key);
      x.repeated = repeatedGuess(src, x.name);
      fields.push(x);
    };

    for (const m of src.matchAll(/(?:[\w$]+\.)*([A-Za-z_$][\w$]*)\.encode\(\s*[^,]*?\.([A-Za-z_$][\w$]*)(?:\[[^\]]+\])?\s*,\s*[\w$]+\.uint32\((\d+)\)\.fork\(\)\s*\)/g)) {
      const tag = Number(m[3]);
      add({ name:m[2], number:tag>>>3, tag, wire:tag&7, wireName:wireName(tag&7), type:m[1], kind:'message' });
    }

    for (const m of src.matchAll(/\.uint32\((\d+)\)\.(double|float|int32|uint32|sint32|fixed32|sfixed32|int64|uint64|sint64|fixed64|sfixed64|bool|string|bytes)\(\s*[^)]*?\.([A-Za-z_$][\w$]*)(?:\[[^\]]+\])?\s*\)/g)) {
      const tag = Number(m[1]);
      if (!SCALAR.has(m[2])) continue;
      add({ name:m[3], number:tag>>>3, tag, wire:tag&7, wireName:wireName(tag&7), type:m[2], kind:'scalar' });
    }

    fields.sort((a,b) => a.number-b.number);
    return { name, fields };
  }

  const schemas = {};
  for (const [name, Type] of Object.entries(proto)) {
    const s = parseType(name, Type);
    if (s?.fields?.length) schemas[name] = s;
  }

  const enums = {};
  for (const [name, val] of Object.entries(proto)) {
    if (!val || typeof val !== 'object' || Array.isArray(val)) continue;
    const numeric = {};
    for (const [k,v] of Object.entries(val)) {
      if (typeof v === 'number' && !/^\d+$/.test(k)) numeric[k] = v;
    }
    if (Object.keys(numeric).length) enums[name] = numeric;
  }

  const requestBodyFields = schemas.RequestBody?.fields || [];
  const responseBodyFields = schemas.ResponseBody?.fields || [];
  const reqByCmd = new Map(requestBodyFields.map(x => [x.number, x]));
  const respByCmd = new Map(responseBodyFields.map(x => [x.number, x]));

  const commands = Object.entries(IMCMD)
    .filter(([k,v]) => /^[A-Z0-9_]+$/.test(k) && typeof v === 'number')
    .map(([symbol,cmd]) => ({ symbol, cmd }))
    .sort((a,b) => a.cmd-b.cmd);

  const apis = commands.map(({symbol,cmd}) => {
    const route = routeByCmd.get(cmd);
    const rq = reqByCmd.get(cmd);
    const rs = respByCmd.get(cmd);
    return {
      cmd,
      symbol,
      route: route?.route || null,
      routeKind: route?.kind || null,
      routeModuleId: route?.moduleId || null,
      requestBodyField: rq?.name || null,
      requestBodyNumber: rq?.number ?? null,
      requestType: rq?.type || null,
      requestFields: rq?.type && schemas[rq.type] ? schemas[rq.type].fields : null,
      responseBodyField: rs?.name || null,
      responseBodyNumber: rs?.number ?? null,
      responseType: rs?.type || null,
      responseFields: rs?.type && schemas[rs.type] ? schemas[rs.type].fields : null,
      classification: route ? 'http' : (rs && !rq ? 'notify/response-only' : (rq || rs ? 'proto-no-route' : 'enum-only'))
    };
  });

  const knownCmds = new Set(commands.map(x => x.cmd));
  const orphanRequestBodies = requestBodyFields.filter(x => !knownCmds.has(x.number));
  const orphanResponseBodies = responseBodyFields.filter(x => !knownCmds.has(x.number));
  const unmappedCommands = apis.filter(x => !x.route);

  // Site-wide endpoint-like strings from all loaded webpack modules.
  const siteRouteSet = new Map();
  const PATH_RE = /["'`](\/?(?:api|v\d+|tiktok\/v\d+|webcast|passport|aweme|node|im)[A-Za-z0-9_?=&%./*:-]{3,})["'`]/g;
  for (const id of Object.keys(req.m)) {
    const src = factorySource(id);
    if (!src) continue;
    for (const m of src.matchAll(PATH_RE)) {
      const path = m[1];
      if (!path.includes('/')) continue;
      const key = path;
      if (!siteRouteSet.has(key)) siteRouteSet.set(key, { route:path, modules:[] });
      const rec = siteRouteSet.get(key);
      if (rec.modules.length < 8 && !rec.modules.includes(String(id))) rec.modules.push(String(id));
    }
  }
  const siteRoutes = [...siteRouteSet.values()].sort((a,b) => a.route.localeCompare(b.route));

  const dump = {
    generatedAt: new Date().toISOString(),
    protoModule: { moduleId:String(protoHit.id), exportKey:protoHit.key },
    routeModules: routeModules.map(x => ({moduleId:String(x.id), score:x.score})),
    stats: {
      commands: commands.length,
      routedCommands: apis.filter(x => x.route).length,
      unmappedCommands: unmappedCommands.length,
      schemas: Object.keys(schemas).length,
      enums: Object.keys(enums).length,
      requestBodyFields: requestBodyFields.length,
      responseBodyFields: responseBodyFields.length,
      siteRoutes: siteRoutes.length
    },
    commands,
    routes,
    apis,
    requestBody: schemas.RequestBody || null,
    responseBody: schemas.ResponseBody || null,
    schemas,
    enums,
    unmappedCommands,
    orphanRequestBodies,
    orphanResponseBodies,
    siteRoutes
  };

  g.__TT_FULL_DUMP__ = dump;
  g.__TT_API_REGISTRY__ = apis;
  g.__TT_PROTO_SCHEMAS__ = schemas;
  g.__TT_SITE_ROUTES__ = siteRoutes;

  console.log('[TT FULL DUMP]', dump.stats);
  console.table(apis.map(x => ({
    cmd:x.cmd,
    symbol:x.symbol,
    route:x.route || '',
    req:x.requestType || '',
    resp:x.responseType || '',
    class:x.classification
  })));

  console.log('copy(JSON.stringify(__TT_FULL_DUMP__, null, 2))');
  console.log('copy(JSON.stringify(__TT_API_REGISTRY__, null, 2))');
  console.log('copy(JSON.stringify(__TT_SITE_ROUTES__, null, 2))');

  return dump;
})();
