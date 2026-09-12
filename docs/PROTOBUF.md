# Protobuf model

The recovered IM protocol uses a top-level `RequestBody` / `ResponseBody` registry where command-specific
messages are embedded as length-delimited fields.

Examples from this dump:

```text
cmd 100
RequestBody.field 100  -> SendMessageRequestBody
ResponseBody.field 100 -> SendMessageResponseBody

cmd 301
RequestBody.field 301  -> MessagesInConversationRequestBody
ResponseBody.field 301 -> MessagesInConversationResponseBody

cmd 2004
RequestBody.field 2004  -> GetMediaUrlsRequestBody
ResponseBody.field 2004 -> GetMediaUrlsResponseBody
```

The full 408-message schema table is in `data/full-dump.json` and `src/proto-schema.ts`.

## Generic codec

`src/protobuf.ts` provides a schema-driven encoder/decoder for recovered fields.

It is intentionally transport-agnostic. Authentication, signing, session state, retries, HTTP/WebSocket
transport, and browser security components are outside this package.
