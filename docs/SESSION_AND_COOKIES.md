# Setup: TikTok session, cookies, device ID and Cloudflare secrets

This document explains the session material used by the fetch-only TikTok Web IM experiments in this repository.

> Use your own TikTok account/session. Treat every cookie/token copied from DevTools as a live credential.
> Never paste real values into GitHub issues, commits, screenshots, examples, or `wrangler.toml`.

## 1. Log in to TikTok Web

1. Open Chrome/Edge.
2. Go to `https://www.tiktok.com/messages`.
3. Log in normally.
4. Confirm that the Messages page loads and you can send a normal DM manually.

Keep this browser session open while collecting the request metadata.

## 2. Copy the current Cookie header

The easiest reliable method is DevTools Network:

1. Open DevTools (`F12` / `Ctrl+Shift+I` / `Cmd+Option+I`).
2. Open the **Network** tab.
3. Reload `https://www.tiktok.com/messages`.
4. Click a request to `www.tiktok.com` such as the `/messages` document request.
5. In **Request Headers**, find `Cookie`.
6. Copy the entire cookie header value — only the value, not the literal `Cookie:` prefix.

It will look conceptually like:

```text
name1=value1; name2=value2; name3=value3; ...
```

Do **not** commit that string to the repository.

### Alternative: Copy as cURL

In Network:

1. Right-click a TikTok request.
2. **Copy → Copy as cURL**.
3. Locate the `-H 'cookie: ...'` header.
4. Copy only its value.

This can be easier when Chrome hides the full header in the UI.

## 3. Store the cookie in Cloudflare as a secret

For a Worker project:

```bash
npx wrangler secret put TIKTOK_COOKIE
```

Wrangler will prompt:

```text
Enter a secret value:
```

Paste the complete cookie string there.

It is encrypted/stored by Cloudflare and is not written into your repository.

To replace an expired session, just run the same command again:

```bash
npx wrangler secret put TIKTOK_COOKIE
```

## 4. Admin token

If your Worker exposes a manual `/run` or `/send` endpoint, protect it with a separate random token:

```bash
openssl rand -hex 32
```

Then:

```bash
npx wrangler secret put ADMIN_TOKEN
```

Example request:

```bash
curl -X POST \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  https://YOUR-WORKER.workers.dev/run
```

Never reuse a TikTok cookie/token as your Worker admin token.

## 5. Target configuration

A simple sender can store target conversations in an environment variable such as `TARGETS_JSON`.

Example shape:

```json
[
  {
    "conversationId": "CONVERSATION_ID",
    "conversationSourceId": "CONVERSATION_SHORT_ID",
    "text": "hello",
    "isGroup": false
  }
]
```

For development you can put non-secret configuration in `wrangler.toml`, but account identifiers may still be private.
For a public repository, prefer local `.dev.vars` or a secret if you do not want them published.

Example local `.dev.vars`:

```dotenv
TARGETS_JSON=[{"conversationId":"...","conversationSourceId":"...","text":"hello","isGroup":false}]
```

`.dev.vars` is ignored by this repository's `.gitignore`.

## 6. Device ID / `wid`

The fetch-only sender does not need a hard-coded device ID.

The observed implementation requests:

```text
GET https://www.tiktok.com/messages
```

with the authenticated cookie and reads TikTok's hydration script:

```html
<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__">
```

The device/web ID is then obtained from:

```text
__DEFAULT_SCOPE__
  -> webapp.app-context
  -> wid
```

Conceptually:

```ts
const html = await fetch("https://www.tiktok.com/messages", {
  headers: {
    Cookie: env.TIKTOK_COOKIE,
    "User-Agent": USER_AGENT,
  },
}).then(r => r.text());

const match = html.match(
  /<script[^>]+id=["']__UNIVERSAL_DATA_FOR_REHYDRATION__["'][^>]*>([\s\S]*?)<\/script>/i
);

const data = JSON.parse(match![1]);

const deviceId =
  data?.__DEFAULT_SCOPE__?.["webapp.app-context"]?.wid;
```

If `wid` is missing, the session/cookie is usually stale, TikTok returned a different page, or the site build changed.

## 7. `msToken` and `s_v_web_id`

The sender can read selected values directly from the stored cookie string.

Observed examples:

```text
msToken
s_v_web_id
```

Conceptually:

```ts
function cookieValue(cookie: string, name: string): string | undefined {
  for (const part of cookie.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;

    const key = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();

    if (key === name) return value;
  }
}
```

The observed fetch flow used `msToken` both as session metadata and, when present, as an `msToken` query parameter.

Do not maintain a separate committed `msToken` value; obtain it from the current cookie/session.

## 8. Ticket Guard / DPoP-related request state

Observed IM requests included Ticket Guard headers such as:

```text
tt-ticket-guard-version
tt-ticket-guard-iteration-version
tt-ticket-guard-web-version
tt-ticket-guard-public-key
tt-ticket-guard-client-data
```

The fetch-only experiment also generated a fresh P-256 ECDSA keypair for request proof material instead of keeping a private key in the repository.

This material is dynamic. Do not copy one old request and expect its security metadata to remain valid indefinitely.

The repository deliberately contains no live Ticket Guard keys or session material.

## 9. Common IM query/header context observed

The working web IM flow used client context equivalent to:

```text
aid=1988
version_code=1.0.0
app_name=tiktok_web
device_platform=web_pc
ztca-version=1
```

and protobuf HTTP requests used:

```http
Accept: application/x-protobuf
Content-Type: application/x-protobuf
Origin: https://www.tiktok.com
Referer: https://www.tiktok.com/
Cookie: <current authenticated cookie>
```

Some security/query values are dynamic and build/session dependent.

## 10. X-Bogus and changing security metadata

TikTok's web client contains its own signing/security layers. Observed requests contained `X-Bogus`/related metadata and Ticket Guard state.

Do not document a captured real value in the repository: it is not a stable API key.

A dump of protobuf schemas/routes tells you the message contract; it does not make TikTok's session/security layer static.

## 11. Local Worker development

Install:

```bash
npm install
```

If you have a Worker project using this research package:

```bash
npx wrangler dev
```

Put local secrets in `.dev.vars`, for example:

```dotenv
TIKTOK_COOKIE=PASTE_YOUR_COOKIE_HERE
ADMIN_TOKEN=LOCAL_RANDOM_TOKEN
TARGETS_JSON=[{"conversationId":"...","conversationSourceId":"...","text":"hello","isGroup":false}]
```

Never commit `.dev.vars`.

## 12. Deployment

Typical flow:

```bash
npx wrangler secret put TIKTOK_COOKIE
npx wrangler secret put ADMIN_TOKEN
npx wrangler deploy
```

If the Worker uses Cron, configure its schedule in the Worker project. Cloudflare Cron's practical minimum cadence is one minute.

## 13. When the cookie expires

Typical symptoms:

```text
GET /messages returns login/challenge HTML
wid not found
IM request starts returning authorization/security errors
conversation data disappears
```

Recovery:

1. Open TikTok Web.
2. Confirm you are logged in.
3. Copy a fresh Cookie header.
4. Replace the Worker secret:

```bash
npx wrangler secret put TIKTOK_COOKIE
```

5. Retry the `/device`, `/run`, or equivalent diagnostic endpoint.

## 14. Pre-publish checklist

Before `git push`:

```bash
git status
git diff --cached
```

Search the repository for accidental session data:

```bash
grep -RniE \
  'sessionid|sid_tt|msToken|ttwid|s_v_web_id|tt-ticket-guard|Cookie:' \
  . \
  --exclude-dir=.git \
  --exclude='*.md'
```

Review every match manually.

Also check Git history if a secret was ever committed. Removing it from the latest file is not enough.

If a live TikTok cookie/session was accidentally published, replace/revoke the session rather than assuming deletion from GitHub makes the credential safe.
