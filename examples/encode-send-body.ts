import { PROTO_SCHEMAS, encodeMessage } from "../src/index.js";

// Example only: builds the command-specific protobuf body.
// This does not perform network requests, signing, authentication, or session handling.
const body = encodeMessage(
  "SendMessageRequestBody",
  {
    conversation_id: "example-conversation",
    conversation_type: 1,
    conversation_short_id: 123n,
    content: JSON.stringify({ aweType: 0, text: "hello" }),
    message_type: 7,
    client_message_id: crypto.randomUUID(),
  },
  PROTO_SCHEMAS,
);

console.log(body);
