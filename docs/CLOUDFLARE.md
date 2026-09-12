# Cloudflare Worker integration notes

The main repository is a protocol/schema research snapshot. A Worker that consumes it typically needs:

```ts
interface Env {
  TIKTOK_COOKIE: string;
  ADMIN_TOKEN?: string;
  TARGETS_JSON?: string;
}
```

## Recommended split

```text
research package
  -> command/route registry
  -> protobuf schema/codec

Worker application
  -> current TikTok cookie/session
  -> device ID hydration
  -> dynamic request/security context
  -> scheduling
  -> application-specific target configuration
```

Keep credentials in Cloudflare secrets, not in this repository.

## Secrets

```bash
npx wrangler secret put TIKTOK_COOKIE
npx wrangler secret put ADMIN_TOKEN
```

## Safe `wrangler.toml` example

```toml
name = "my-tiktok-im-worker"
main = "src/index.ts"
compatibility_date = "2026-09-01"

[triggers]
crons = ["* * * * *"]
```

Do not put this in `wrangler.toml`:

```toml
TIKTOK_COOKIE = "real-cookie-here"
```

For the step-by-step browser session instructions, see
[`SESSION_AND_COOKIES.md`](./SESSION_AND_COOKIES.md).
