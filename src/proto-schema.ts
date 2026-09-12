// Generated protobuf schema registry.

export const PROTO_SCHEMAS = {
  "Frame": {
    "name": "Frame",
    "fields": [
      {
        "name": "seqid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "uint64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "logid",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "uint64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "service",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "method",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "headers",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ExtendedEntry",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "payload_encoding",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "payload_type",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "payload",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StatusMessage": {
    "name": "StatusMessage",
    "fields": [
      {
        "name": "type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "entity",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "value",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkConversationReadEntity": {
    "name": "MarkConversationReadEntity",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkConversationReadValue": {
    "name": "MarkConversationReadValue",
    "fields": [
      {
        "name": "target_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inboxType",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_badge_count_v2",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mark_read_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mark_read_idempotent_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mark_read_reaction_key",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteMessageEntity": {
    "name": "DeleteMessageEntity",
    "fields": [
      {
        "name": "message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteMessageValue": {
    "name": "DeleteMessageValue",
    "fields": [
      {
        "name": "read_badge_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationEntity": {
    "name": "DeleteConversationEntity",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationValue": {
    "name": "DeleteConversationValue",
    "fields": [
      {
        "name": "read_badge_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_min_index",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationSettingEntity": {
    "name": "UpdateConversationSettingEntity",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationCoreInfoEntity": {
    "name": "UpdateConversationCoreInfoEntity",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationParticipantEntity": {
    "name": "UpdateConversationParticipantEntity",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationParticipantValue": {
    "name": "UpdateConversationParticipantValue",
    "fields": [
      {
        "name": "added_participant",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "removed_participant",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "modified_participant",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "UpdateMessageExtEntity": {
    "name": "UpdateMessageExtEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DissolveConversationEntity": {
    "name": "DissolveConversationEntity",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModeChangeEntity": {
    "name": "ModeChangeEntity",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModeChangeValue": {
    "name": "ModeChangeValue",
    "fields": [
      {
        "name": "mode",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RefreshMessageEntity": {
    "name": "RefreshMessageEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RecallMessageEntity": {
    "name": "RecallMessageEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RecallMessageValue": {
    "name": "RecallMessageValue",
    "fields": [
      {
        "name": "recall_message_uid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "HideViolativeMessageEntity": {
    "name": "HideViolativeMessageEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReFetchMessageEntity": {
    "name": "ReFetchMessageEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateMessagePropertyEntity": {
    "name": "UpdateMessagePropertyEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RefreshAllMessageEntity": {
    "name": "RefreshAllMessageEntity",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RefreshAllMessageValue": {
    "name": "RefreshAllMessageValue",
    "fields": [
      {
        "name": "reset_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "reason",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "FirstMessageEntity": {
    "name": "FirstMessageEntity",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MultiPushModeChangeEntity": {
    "name": "MultiPushModeChangeEntity",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MultiPushModeChangeValue": {
    "name": "MultiPushModeChangeValue",
    "fields": [
      {
        "name": "conversation_ids",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "StreakEntity": {
    "name": "StreakEntity",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StreakStatusValue": {
    "name": "StreakStatusValue",
    "fields": [
      {
        "name": "streak_message_content",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scene",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "disable_in_app_notification",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StreakMessageContent": {
    "name": "StreakMessageContent",
    "fields": [
      {
        "name": "streak_cmd",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StreakCommandMessage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "EmojiProperty": {
    "name": "EmojiProperty",
    "fields": [
      {
        "name": "icon_url",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PropertyValue": {
    "name": "PropertyValue",
    "fields": [
      {
        "name": "required_min_version",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "emoji_data",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "EmojiProperty",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "PropertyItem": {
    "name": "PropertyItem",
    "fields": [
      {
        "name": "uid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "idempotent_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "value",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time_micro",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PropertyItemList": {
    "name": "PropertyItemList",
    "fields": [
      {
        "name": "Items",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PropertyItem",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "MessageBody": {
    "name": "MessageBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sender",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "order_in_conversation",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_sender",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation_v2",
        "number": 17,
        "tag": 136,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "reference_info",
        "number": 18,
        "tag": 146,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReferenceInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "index_in_conversation_v1",
        "number": 19,
        "tag": 152,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content_pb",
        "number": 20,
        "tag": 162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scene",
        "number": 21,
        "tag": 170,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_rank_update_rule",
        "number": 22,
        "tag": 176,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ttl",
        "number": 23,
        "tag": 184,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "media_info_list",
        "number": 24,
        "tag": 194,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MediaInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "pre_conversation_index",
        "number": 25,
        "tag": 200,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_persistent_extra",
        "number": 26,
        "tag": 210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReferenceInfo": {
    "name": "ReferenceInfo",
    "fields": [
      {
        "name": "referenced_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "hint",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ref_message_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "referenced_message_status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "root_message_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "root_message_conv_index",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sender",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RetentionResult": {
    "name": "RetentionResult",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "timestamp",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "Participant": {
    "name": "Participant",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sort_order",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "role",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "alias",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "blocked",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "left_block_time",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ParticipantsPage": {
    "name": "ParticipantsPage",
    "fields": [
      {
        "name": "participants",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationInfo": {
    "name": "ConversationInfo",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "first_page_participants",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantsPage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mute",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "stick_on_top",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_version",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_participant",
        "number": 14,
        "tag": 112,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index_v2",
        "number": 15,
        "tag": 120,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index_v2",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_unread_count",
        "number": 20,
        "tag": 160,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_message_index",
        "number": 21,
        "tag": 168,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_model_scene",
        "number": 22,
        "tag": 178,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationInfoV2": {
    "name": "ConversationInfoV2",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "first_page_participants",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantsPage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_count",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_participant",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count_v2",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_rank_version",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_info",
        "number": 20,
        "tag": 162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_core_info",
        "number": 50,
        "tag": 402,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_setting_info",
        "number": 51,
        "tag": 410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSettingInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "biz_ext",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationCoreInfo": {
    "name": "ConversationCoreInfo",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "info_version",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "desc",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "icon",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "notice",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "owner",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_owner",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_status",
        "number": 14,
        "tag": 112,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_normal_only",
        "number": 15,
        "tag": 120,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mode",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "creator_uid",
        "number": 17,
        "tag": 136,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_model_scene",
        "number": 19,
        "tag": 154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "first_message_timestamp",
        "number": 20,
        "tag": 160,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_core_persistent_extra",
        "number": 21,
        "tag": 170,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvCorePersistentExt",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ConversationSettingInfo": {
    "name": "ConversationSettingInfo",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mute",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "stick_on_top",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "setting_version",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "favorite",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "set_top_time",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "set_favorite_time",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index_v2",
        "number": 14,
        "tag": 112,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index_v2",
        "number": 15,
        "tag": 120,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_badge_count",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_badge_count_v2",
        "number": 17,
        "tag": 136,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_setting_persistent_extra",
        "number": 21,
        "tag": 170,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvSettingPersistentExt",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GroupInfo": {
    "name": "GroupInfo",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "info_version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_name",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_desc",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_icon",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserRequestBody": {
    "name": "MessagesPerUserRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "interval",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_user",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserResponseBody": {
    "name": "MessagesPerUserResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_interval",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_conversation_version",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_badge_count",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationBadgeCountInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cmd_index",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages_pb",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MessagesPerUserComboRequestBody": {
    "name": "MessagesPerUserComboRequestBody",
    "fields": [
      {
        "name": "inboxes",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserInboxRequest",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "status_adapter_map",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_pull_time",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserInboxRequest": {
    "name": "MessagesPerUserInboxRequest",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scene",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor_type",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserComboResponseBody": {
    "name": "MessagesPerUserComboResponseBody",
    "fields": [
      {
        "name": "inboxes",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagePerUserInboxResponse",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "need_reset",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagePerUserInboxResponse": {
    "name": "MessagePerUserInboxResponse",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "messages_pb",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_interval",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status_code",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "error_desc",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_badge_count",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationBadgeCountInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "cursor_type",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationBadgeCountInfo": {
    "name": "ConversationBadgeCountInfo",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_index_v2",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "InboxMessagesPerUser": {
    "name": "InboxMessagesPerUser",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CheckMessagePerUserRequestBody": {
    "name": "CheckMessagePerUserRequestBody",
    "fields": [
      {
        "name": "checks",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InboxMessagesPerUser",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "InboxMessagesPerUserResponseBody": {
    "name": "InboxMessagesPerUserResponseBody",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CheckMessagesPerUserResponseBody": {
    "name": "CheckMessagesPerUserResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InboxMessagesPerUserResponseBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "MessagesPerUserInitRequestBody": {
    "name": "MessagesPerUserInitRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_user",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "init_sub_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserInitResponseBody": {
    "name": "MessagesPerUserInitResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "conversations",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "per_user_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "init_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesPerUserInitV2RequestBody": {
    "name": "MessagesPerUserInitV2RequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_user",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "init_sub_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "with_empty_conv",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "siderank_keys",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MessagesPerUserInitV2ResponseBody": {
    "name": "MessagesPerUserInitV2ResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "conversations",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "per_user_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "init_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cmd_start_index",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_conversation_version",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages_pb",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ReportGetMessagesCursorRequestBody": {
    "name": "ReportGetMessagesCursorRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationsListRequestBody": {
    "name": "ConversationsListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "policy",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationsListResponseBody": {
    "name": "ConversationsListResponseBody",
    "fields": [
      {
        "name": "conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageIDIndexEntry": {
    "name": "MessageIDIndexEntry",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessagesRequestBody": {
    "name": "GetMessagesRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "entries",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageIDIndexEntry",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetMessagesResponseBody": {
    "name": "GetMessagesResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "MessagesPerConversationSearchRequestBody": {
    "name": "MessagesPerConversationSearchRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tags",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MessagesPerConversationSearchResponseBody": {
    "name": "MessagesPerConversationSearchResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "conversations",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesInConversationRequestBody": {
    "name": "MessagesInConversationRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "direction",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "anchor_index",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesInConversationResponseBody": {
    "name": "MessagesInConversationResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages_pb",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MessagesInConversationWithRangeRequestBody": {
    "name": "MessagesInConversationWithRangeRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_range",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageRange",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageRange": {
    "name": "MessageRange",
    "fields": [
      {
        "name": "min_conv_index",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_region",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "max_conv_index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "max_region",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesInConversationWithRangeResponseBody": {
    "name": "MessagesInConversationWithRangeResponseBody",
    "fields": [
      {
        "name": "messages_pb",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessagesCheckInfoInConversationRequestBody": {
    "name": "GetMessagesCheckInfoInConversationRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor_reverse_begin",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "expect_msg_total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor_reverse_end",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagesCheckInfo": {
    "name": "MessagesCheckInfo",
    "fields": [
      {
        "name": "head_msg_index",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tail_msg_index",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "msg_count",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "indexes_checksum",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "uint32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessagesCheckInfoInConversationResponseBody": {
    "name": "GetMessagesCheckInfoInConversationResponseBody",
    "fields": [
      {
        "name": "msgs_checkinfo_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesCheckInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "real_msg_total_count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor_reverse_next",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessagesCheckInfoV2RequestBody": {
    "name": "GetMessagesCheckInfoV2RequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageCheckInfoV2": {
    "name": "MessageCheckInfoV2",
    "fields": [
      {
        "name": "msg_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conv",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessagesCheckInfoV2ResponseBody": {
    "name": "GetMessagesCheckInfoV2ResponseBody",
    "fields": [
      {
        "name": "msg_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageCheckInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_demoted",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CreateConversationRequestBody": {
    "name": "CreateConversationRequestBody",
    "fields": [
      {
        "name": "conversation_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "CreateConversationResponseBody": {
    "name": "CreateConversationResponseBody",
    "fields": [
      {
        "name": "conversation",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CreateConversationV2RequestBody": {
    "name": "CreateConversationV2RequestBody",
    "fields": [
      {
        "name": "conversation_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "persistent",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "idempotent_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "avatar_url",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "description",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz",
        "number": 12,
        "tag": 98,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "channel",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_model_scene",
        "number": 15,
        "tag": 122,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_core_persistent_extra",
        "number": 17,
        "tag": 138,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvCorePersistentExt",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "biz_core_transient_extra",
        "number": 18,
        "tag": 146,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvCoreTransientExt",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "CreateConversationV2ResponseBody": {
    "name": "CreateConversationV2ResponseBody",
    "fields": [
      {
        "name": "conversation",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendUserActionRequestBody": {
    "name": "SendUserActionRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "action_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendInputStatusRequestBody": {
    "name": "SendInputStatusRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendInputStatusResponseBody": {
    "name": "SendInputStatusResponseBody",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConfigsResponseBody": {
    "name": "GetConfigsResponseBody",
    "fields": [
      {
        "name": "version",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "configs",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Config",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "Config": {
    "name": "Config",
    "fields": [
      {
        "name": "conf_name",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conf_value",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConvCountReport": {
    "name": "ConvCountReport",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "unread_count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_conversation_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UnReadCountReportRequestBody": {
    "name": "UnReadCountReportRequestBody",
    "fields": [
      {
        "name": "total_unread_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_unread_count",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConvCountReport",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "UnReadCountReportResponseBody": {
    "name": "UnReadCountReportResponseBody",
    "fields": [
      {
        "name": "set_total_status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "failed_conv_list",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetUnreadCountRequestBody": {
    "name": "GetUnreadCountRequestBody",
    "fields": [
      {
        "name": "get_total",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetUnreadCountResponseBody": {
    "name": "GetUnreadCountResponseBody",
    "fields": [
      {
        "name": "total_unread_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "failed_conv_list",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetBlockListRequestBody": {
    "name": "GetBlockListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_id",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_conv_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BlockUserInfo": {
    "name": "BlockUserInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetBlockListResponseBody": {
    "name": "GetBlockListResponseBody",
    "fields": [
      {
        "name": "user_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BlockUserInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SetBlocklistRequestBody": {
    "name": "SetBlocklistRequestBody",
    "fields": [
      {
        "name": "set_block_list",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "blocklist",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "block_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_id",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_conv_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SetBlocklistResponseBody": {
    "name": "SetBlocklistResponseBody",
    "fields": [
      {
        "name": "failed_list",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "CheckInBlockListRequestBody": {
    "name": "CheckInBlockListRequestBody",
    "fields": [
      {
        "name": "user_to_check",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_conv_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CheckInBlockListResponseBody": {
    "name": "CheckInBlockListResponseBody",
    "fields": [
      {
        "name": "in_blocklist",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BlockMembersRequestBody": {
    "name": "BlockMembersRequestBody",
    "fields": [
      {
        "name": "block_status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BlockMembersResponseBody": {
    "name": "BlockMembersResponseBody",
    "fields": [
      {
        "name": "failed_members",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "BlockConversationRequestBody": {
    "name": "BlockConversationRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "block_normal_only",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkMessageRequestBody": {
    "name": "MarkMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "do_action",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "action_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sort_time",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tag",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkMessageResponseBody": {
    "name": "MarkMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchUnmarkMessageRequestBody": {
    "name": "BatchUnmarkMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_ids",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "action_type",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tag",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchUnmarkMessageResponseBody": {
    "name": "BatchUnmarkMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PullMarkMessageRequestBody": {
    "name": "PullMarkMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "asc",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "action_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tag",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "clear_unread_count",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PullMarkMessageResponseBody": {
    "name": "PullMarkMessageResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkMsgUnreadCountReportRequestBody": {
    "name": "MarkMsgUnreadCountReportRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_unread_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkMsgUnreadCountReportResponseBody": {
    "name": "MarkMsgUnreadCountReportResponseBody",
    "fields": [
      {
        "name": "set_total_status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "failed_tag_list",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MarkMsgGetUnreadCountRequestBody": {
    "name": "MarkMsgGetUnreadCountRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "get_total",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "tags",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MarkMsgGetUnreadCountResponseBody": {
    "name": "MarkMsgGetUnreadCountResponseBody",
    "fields": [
      {
        "name": "total_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "failed_tag_list",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "SetConversationInfoRequestBody": {
    "name": "SetConversationInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SetConversationInfoResponseBody": {
    "name": "SetConversationInfoResponseBody",
    "fields": [
      {
        "name": "conversation",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationRequestBody": {
    "name": "DeleteConversationRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_message_index",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_message_index_v2",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DissolveConversationRequestBody": {
    "name": "DissolveConversationRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteMessageRequestBody": {
    "name": "DeleteMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkConversationReadRequestBody": {
    "name": "MarkConversationReadRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_message_index",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_unread_count",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_unread_count",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_message_index_v2",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_badge_count",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_badge_count_v2",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationParticipantsReadIndexV3RequestBody": {
    "name": "GetConversationParticipantsReadIndexV3RequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationParticipantsReadIndexV3ResponseBody": {
    "name": "GetConversationParticipantsReadIndexV3ResponseBody",
    "fields": [
      {
        "name": "indexes",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantReadIndex",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "BatchGetConversationParticipantsReadIndexRequestBody": {
    "name": "BatchGetConversationParticipantsReadIndexRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "request_from",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index_required",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchGetConversationParticipantsReadIndexResponseBody": {
    "name": "BatchGetConversationParticipantsReadIndexResponseBody",
    "fields": [
      {
        "name": "conversationParticipantsReadIndex",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationParticipantReadIndex",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ConversationParticipantReadIndex": {
    "name": "ConversationParticipantReadIndex",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participantReadIndex",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantReadIndex",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ParticipantReadIndex": {
    "name": "ParticipantReadIndex",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_v2",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_min",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationParticipantsMinIndexV3RequestBody": {
    "name": "GetConversationParticipantsMinIndexV3RequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationParticipantsMinIndexV3ResponseBody": {
    "name": "GetConversationParticipantsMinIndexV3ResponseBody",
    "fields": [
      {
        "name": "indexes",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantMinIndex",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ParticipantMinIndex": {
    "name": "ParticipantMinIndex",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_v2",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchMarkConversationReadRequestBody": {
    "name": "BatchMarkConversationReadRequestBody",
    "fields": [
      {
        "name": "mark_read_requests",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkConversationReadRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "BatchMarkConversationReadResponseBody": {
    "name": "BatchMarkConversationReadResponseBody",
    "fields": [
      {
        "name": "failed_requests",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkConversationReadRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "SendMessageP2PRequestBody": {
    "name": "SendMessageP2PRequestBody",
    "fields": [
      {
        "name": "send_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "visible_user",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "invisible_user",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "message_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendMessageP2PResponseBody": {
    "name": "SendMessageP2PResponseBody",
    "fields": [
      {
        "name": "failed_user",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "SendMessageRequestBody": {
    "name": "SendMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mentioned_users",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "ignore_badge_count",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ref_msg_info",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReferencedMessageInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "content_pb",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "scene",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "VisibleUsers",
        "number": 15,
        "tag": 120,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "InvisibleUsers",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "send_media_list",
        "number": 17,
        "tag": 138,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendMediaRequest",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "biz_transient_extra",
        "number": 18,
        "tag": 146,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_persistent_extra",
        "number": 19,
        "tag": 154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendMediaRequest": {
    "name": "SendMediaRequest",
    "fields": [
      {
        "name": "type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "decrypt_key",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "metadata",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MediaMeta",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "MediaMeta": {
    "name": "MediaMeta",
    "fields": [
      {
        "name": "width",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "height",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "duration",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "size",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "codec",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MediaInfo": {
    "name": "MediaInfo",
    "fields": [
      {
        "name": "id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "decrypt_key",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "url_info_list",
        "number": 20,
        "tag": 162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MediaURLStruct",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "MediaURLStruct": {
    "name": "MediaURLStruct",
    "fields": [
      {
        "name": "display_type",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "url_list",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "video_model",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "width",
        "number": 20,
        "tag": 160,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "height",
        "number": 21,
        "tag": 168,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "duration",
        "number": 22,
        "tag": 176,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "size",
        "number": 23,
        "tag": 184,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 24,
        "tag": 194,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "codec",
        "number": 25,
        "tag": 202,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReferencedMessageInfo": {
    "name": "ReferencedMessageInfo",
    "fields": [
      {
        "name": "referenced_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "hint",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "root_message_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "root_message_conv_index",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendMessageResponseBody": {
    "name": "SendMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "filtered_content",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_async_send",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_ticket",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "inboxPageCategory",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "filter_reason",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModifyMessageRequestBody": {
    "name": "ModifyMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MsgTrace": {
    "name": "MsgTrace",
    "fields": [
      {
        "name": "path",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MuteBadgeCountInfo": {
    "name": "MuteBadgeCountInfo",
    "fields": [
      {
        "name": "message_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "NewMessageNotify": {
    "name": "NewMessageNotify",
    "fields": [
      {
        "name": "conversation_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "notify_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previous_cursor",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation_v2",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_version",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "previous_conversation_version",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cmd_message_index",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "trace",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MsgTrace",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ref_msg_info",
        "number": 15,
        "tag": 122,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReferenceInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previous_msg_index_in_conv",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "readconv_version",
        "number": 17,
        "tag": 136,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "pre_readconv_version",
        "number": 18,
        "tag": 144,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mute_badge_count_info",
        "number": 19,
        "tag": 154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MuteBadgeCountInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "push_preview",
        "number": 20,
        "tag": 162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count_v2",
        "number": 21,
        "tag": 168,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_version",
        "number": 22,
        "tag": 176,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor_type",
        "number": 23,
        "tag": 184,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "NewDirectPushNotify": {
    "name": "NewDirectPushNotify",
    "fields": [
      {
        "name": "send_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sender",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_sender",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BizNewDirectPushNotify": {
    "name": "BizNewDirectPushNotify",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "NewFriendMessageNotify": {
    "name": "NewFriendMessageNotify",
    "fields": [
      {
        "name": "message_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "from_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "to_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkConversationReadNotify": {
    "name": "MarkConversationReadNotify",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_index_v2",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_id",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "InputStatusNotify": {
    "name": "InputStatusNotify",
    "fields": [
      {
        "name": "sender",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "input_status",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationInfoUpdatedNotify": {
    "name": "ConversationInfoUpdatedNotify",
    "fields": [
      {
        "name": "conversation",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoRequestBody": {
    "name": "GetConversationInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoResponseBody": {
    "name": "GetConversationInfoResponseBody",
    "fields": [
      {
        "name": "conversation_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ConversationsPerUserByFavoriteV2RequestBody": {
    "name": "ConversationsPerUserByFavoriteV2RequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationsPerUserByTopV2RequestBody": {
    "name": "ConversationsPerUserByTopV2RequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoV2RequestBody": {
    "name": "GetConversationInfoV2RequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoV2ResponseBody": {
    "name": "GetConversationInfoV2ResponseBody",
    "fields": [
      {
        "name": "conversation_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoListRequestBody": {
    "name": "GetConversationInfoListRequestBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationInfoListResponseBody": {
    "name": "GetConversationInfoListResponseBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfo",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationInfoListV2RequestBody": {
    "name": "GetConversationInfoListV2RequestBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoV2RequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationInfoListV2ResponseBody": {
    "name": "GetConversationInfoListV2ResponseBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "PreviewerGetConversationInfoListRequestBody": {
    "name": "PreviewerGetConversationInfoListRequestBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoV2RequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "PreviewerGetConversationInfoListResponseBody": {
    "name": "PreviewerGetConversationInfoListResponseBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoListByFavoriteV2ResponseBody": {
    "name": "GetConversationInfoListByFavoriteV2ResponseBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationInfoListByTopV2ResponseBody": {
    "name": "GetConversationInfoListByTopV2ResponseBody",
    "fields": [
      {
        "name": "conversation_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationCheckInfo": {
    "name": "ConversationCheckInfo",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationsCheckInfoResponseBody": {
    "name": "GetConversationsCheckInfoResponseBody",
    "fields": [
      {
        "name": "conversation_checkinfo_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCheckInfo",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationsCheckInfoV2RequestBody": {
    "name": "GetConversationsCheckInfoV2RequestBody",
    "fields": [
      {
        "name": "limit",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationCheckInfoV2": {
    "name": "ConversationCheckInfoV2",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_pinned",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationsCheckInfoV2ResponseBody": {
    "name": "GetConversationsCheckInfoV2ResponseBody",
    "fields": [
      {
        "name": "conv_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCheckInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "is_demoted",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_pinned_included",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RecallMessageRequestBody": {
    "name": "RecallMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationAddParticipantsRequestBody": {
    "name": "ConversationAddParticipantsRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "SecUidPair": {
    "name": "SecUidPair",
    "fields": [
      {
        "name": "uid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationAddParticipantsResponseBody": {
    "name": "ConversationAddParticipantsResponseBody",
    "fields": [
      {
        "name": "success_participants",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "failed_participants",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_success_participants",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SecUidPair",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "sec_failed_participants",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SecUidPair",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ConversationRemoveParticipantsRequestBody": {
    "name": "ConversationRemoveParticipantsRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ConversationRemoveParticipantsResponseBody": {
    "name": "ConversationRemoveParticipantsResponseBody",
    "fields": [
      {
        "name": "failed_participants",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "failed_sec_participants",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SecUidPair",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ConversationLeaveRequestBody": {
    "name": "ConversationLeaveRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationSetRoleRequestBody": {
    "name": "ConversationSetRoleRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationSetRoleResponseBody": {
    "name": "ConversationSetRoleResponseBody",
    "fields": [
      {
        "name": "success_participants",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "failed_participants",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationParticipantsListRequestBody": {
    "name": "ConversationParticipantsListRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationParticipantsListResponseBody": {
    "name": "ConversationParticipantsListResponseBody",
    "fields": [
      {
        "name": "participants_page",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ParticipantsPage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "MgetConversationParticipantsRequestBody": {
    "name": "MgetConversationParticipantsRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "MgetConversationParticipantsResponseBody": {
    "name": "MgetConversationParticipantsResponseBody",
    "fields": [
      {
        "name": "participants",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "UpdateConversationParticipantRequestBody": {
    "name": "UpdateConversationParticipantRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "role",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "alias",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_alias_set",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationParticipantResponseBody": {
    "name": "UpdateConversationParticipantResponseBody",
    "fields": [
      {
        "name": "participant",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchUpdateConversationParticipantRequestBody": {
    "name": "BatchUpdateConversationParticipantRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "role",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationParticipantResult": {
    "name": "UpdateConversationParticipantResult",
    "fields": [
      {
        "name": "participant",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BatchUpdateConversationParticipantResponseBody": {
    "name": "BatchUpdateConversationParticipantResponseBody",
    "fields": [
      {
        "name": "success_participants",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationParticipantResult",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "callback_failed_participants",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationParticipantResult",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "failed_participants",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetGroupInfoRequestBody": {
    "name": "GetGroupInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetGroupInfoResponseBody": {
    "name": "GetGroupInfoResponseBody",
    "fields": [
      {
        "name": "group_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetGroupInfoListRequestBody": {
    "name": "GetGroupInfoListRequestBody",
    "fields": [
      {
        "name": "group_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetGroupInfoRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetGroupInfoListResponseBody": {
    "name": "GetGroupInfoListResponseBody",
    "fields": [
      {
        "name": "group_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupInfo",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "SetGroupInfoRequestBody": {
    "name": "SetGroupInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_name",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_desc",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_icon",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SetGroupInfoResponseBody": {
    "name": "SetGroupInfoResponseBody",
    "fields": [
      {
        "name": "group_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationCoreInfoRequestBody": {
    "name": "GetConversationCoreInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationCoreInfoResponseBody": {
    "name": "GetConversationCoreInfoResponseBody",
    "fields": [
      {
        "name": "conversation_core_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetConversationCoreInfoListRequestBody": {
    "name": "GetConversationCoreInfoListRequestBody",
    "fields": [
      {
        "name": "conversation_core_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationCoreInfoRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationCoreInfoListResponseBody": {
    "name": "GetConversationCoreInfoListResponseBody",
    "fields": [
      {
        "name": "conversation_core_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "SetConversationCoreInfoRequestBody": {
    "name": "SetConversationCoreInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "desc",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "icon",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "notice",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_name_set",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_desc_set",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_icon_set",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_notice_set",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_model_scene",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_core_persistent_extra",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvCorePersistentExt",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "biz_core_transient_extra",
        "number": 15,
        "tag": 122,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvCoreTransientExt",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "SetConversationCoreInfoResponseBody": {
    "name": "SetConversationCoreInfoResponseBody",
    "fields": [
      {
        "name": "conversation_core_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpsertConversationCoreExtInfoRequestBody": {
    "name": "UpsertConversationCoreExtInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpsertConversationCoreExtInfoResponseBody": {
    "name": "UpsertConversationCoreExtInfoResponseBody",
    "fields": [
      {
        "name": "core_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationCoreExtInfoRequestBody": {
    "name": "DeleteConversationCoreExtInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationCoreExtInfoResponseBody": {
    "name": "DeleteConversationCoreExtInfoResponseBody",
    "fields": [
      {
        "name": "core_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SetConversationSettingInfoRequestBody": {
    "name": "SetConversationSettingInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "set_stick_on_top",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "set_mute",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "set_favorite",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_setting_persistent_extra",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvSettingPersistentExt",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "biz_setting_transient_extra",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizConvSettingTransientExt",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "SetConversationSettingInfoResponseBody": {
    "name": "SetConversationSettingInfoResponseBody",
    "fields": [
      {
        "name": "setting_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSettingInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpsertConversationSettingExtInfoRequestBody": {
    "name": "UpsertConversationSettingExtInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpsertConversationSettingExtInfoResponseBody": {
    "name": "UpsertConversationSettingExtInfoResponseBody",
    "fields": [
      {
        "name": "setting_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSettingInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationSettingExtInfoRequestBody": {
    "name": "DeleteConversationSettingExtInfoRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteConversationSettingExtInfoResponseBody": {
    "name": "DeleteConversationSettingExtInfoResponseBody",
    "fields": [
      {
        "name": "setting_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSettingInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationSettingInfoRequestBody": {
    "name": "GetConversationSettingInfoRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationSettingInfoResponseBody": {
    "name": "GetConversationSettingInfoResponseBody",
    "fields": [
      {
        "name": "conversation_setting_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSettingInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StrangerConversation": {
    "name": "StrangerConversation",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "unread",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "participants",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Participant",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "badge_count",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StrangerNewMessageNotify": {
    "name": "StrangerNewMessageNotify",
    "fields": [
      {
        "name": "message",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetStrangerConversationListRequestBody": {
    "name": "GetStrangerConversationListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "show_total_unread",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "biz_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetStrangerConversationListResponseBody": {
    "name": "GetStrangerConversationListResponseBody",
    "fields": [
      {
        "name": "next_cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_unread",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_list",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StrangerConversation",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetStrangerMessagesRequestBody": {
    "name": "GetStrangerMessagesRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "reset_unread_count",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetStrangerMessagesResponseBody": {
    "name": "GetStrangerMessagesResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "DeleteStrangerMessageRequestBody": {
    "name": "DeleteStrangerMessageRequestBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteStrangerConversationRequestBody": {
    "name": "DeleteStrangerConversationRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MarkStrangerConversationReadRequestBody": {
    "name": "MarkStrangerConversationReadRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetStrangerUnreadCountRequestBody": {
    "name": "GetStrangerUnreadCountRequestBody",
    "fields": [
      {
        "name": "reset_unread_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetStrangerUnreadCountResponseBody": {
    "name": "GetStrangerUnreadCountResponseBody",
    "fields": [
      {
        "name": "user_unread_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessagePropertyContent": {
    "name": "MessagePropertyContent",
    "fields": [
      {
        "name": "type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sync_content",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SyncContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "reaction_content",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReactionContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "index_in_message",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReactionContent": {
    "name": "ReactionContent",
    "fields": [
      {
        "name": "id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "name",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "target_message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "target_client_message_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReactionMessageRequestBody": {
    "name": "ReactionMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "reaction_content",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReactionContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReactionMessageResponseBody": {
    "name": "ReactionMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SyncContent": {
    "name": "SyncContent",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "target_message_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "target_client_message_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SyncMessageRequestBody": {
    "name": "SyncMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sync_content",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SyncContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "target_message_sender",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SyncMessageResponseBody": {
    "name": "SyncMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModifyPropertyContent": {
    "name": "ModifyPropertyContent",
    "fields": [
      {
        "name": "operation",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "key",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "value",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "idempotent_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModifyPropertyBody": {
    "name": "ModifyPropertyBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "modify_property_content",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyPropertyContent",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ModifyMessagePropertyRequestBody": {
    "name": "ModifyMessagePropertyRequestBody",
    "fields": [
      {
        "name": "property_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyPropertyBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ModifyMessagePropertyResponseBody": {
    "name": "ModifyMessagePropertyResponseBody",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "AckMessageRequestBody": {
    "name": "AckMessageRequestBody",
    "fields": [
      {
        "name": "start_timestamp",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "msg_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "push_type",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cmd",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "AckMessageResponseBody": {
    "name": "AckMessageResponseBody",
    "fields": [
      {
        "name": "backend_e2e_latency",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetUploadTokenRequestBody": {
    "name": "GetUploadTokenRequestBody",
    "fields": [
      {
        "name": "vsdk_version",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "token_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetUploadTokenResponseBody": {
    "name": "GetUploadTokenResponseBody",
    "fields": [
      {
        "name": "access_key",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "hosts",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "token",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "token_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "secret_access_key",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "space_name",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "service_id",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "expire_time",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "current_time",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ImgOption": {
    "name": "ImgOption",
    "fields": [
      {
        "name": "tplv",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "params",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "format",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "urls",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "VideoOption": {
    "name": "VideoOption",
    "fields": [
      {
        "name": "vid",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cover_uri",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "urls",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "cover_urls",
        "number": 101,
        "tag": 810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "AudioOption": {
    "name": "AudioOption",
    "fields": [
      {
        "name": "vid",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "urls",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "FileOption": {
    "name": "FileOption",
    "fields": [
      {
        "name": "urls",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetMediaUrlsRequestBody": {
    "name": "GetMediaUrlsRequestBody",
    "fields": [
      {
        "name": "source_appid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "uri",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "media_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "encrypted",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "img_options",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ImgOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "video_options",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VideoOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "audio_options",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AudioOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "file_options",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FileOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "encrypted_uri",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "read_url_from",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMediaUrlsResponseBody": {
    "name": "GetMediaUrlsResponseBody",
    "fields": [
      {
        "name": "uri",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "media_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "img_options",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ImgOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "video_options",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VideoOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "audio_options",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AudioOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "file_options",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FileOption",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "encrypted_urls",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "VcdConversation": {
    "name": "VcdConversation",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "vcd_version",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "VcdCleanRequestBody": {
    "name": "VcdCleanRequestBody",
    "fields": [
      {
        "name": "local_conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VcdConversation",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "VcdCleanResponseBody": {
    "name": "VcdCleanResponseBody",
    "fields": [
      {
        "name": "server_conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VcdConversation",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetTicketRequestBody": {
    "name": "GetTicketRequestBody",
    "fields": [
      {
        "name": "ticket_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "to_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_conversation_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetTicketResponseBody": {
    "name": "GetTicketResponseBody",
    "fields": [
      {
        "name": "ticket",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetUserConversationListRequestBody": {
    "name": "GetUserConversationListRequestBody",
    "fields": [
      {
        "name": "sort_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "include_role",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "exclude_role",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "include_removed_group",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "with_cold",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "customed_con_type",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "include_multiple_roles",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetUserConversationListResponseBody": {
    "name": "GetUserConversationListResponseBody",
    "fields": [
      {
        "name": "list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BroadcastSendMessageRequestBody": {
    "name": "BroadcastSendMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "content",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "mentioned_users",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "BroadcastSendMessageResponseBody": {
    "name": "BroadcastSendMessageResponseBody",
    "fields": [
      {
        "name": "server_message_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_message_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "filtered_content",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BroadcastRecvMessageRequestBody": {
    "name": "BroadcastRecvMessageRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "reverse",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "pull_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BroadcastRecvMessageResponseBody": {
    "name": "BroadcastRecvMessageResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cursor",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationRequest": {
    "name": "ConversationRequest",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BroadcastUserCounterRequestBody": {
    "name": "BroadcastUserCounterRequestBody",
    "fields": [
      {
        "name": "conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationRequest",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "BroadcastUserInfo": {
    "name": "BroadcastUserInfo",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "counter",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BroadcastUserCounterResponseBody": {
    "name": "BroadcastUserCounterResponseBody",
    "fields": [
      {
        "name": "infos",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastUserInfo",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ClientACKRequestBody": {
    "name": "ClientACKRequestBody",
    "fields": [
      {
        "name": "start_time_stamp",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cmd",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "network_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "logid",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "client_time_stamp",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ClientBatchACKRequestBody": {
    "name": "ClientBatchACKRequestBody",
    "fields": [
      {
        "name": "ack_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientACKRequestBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "VoipInfo": {
    "name": "VoipInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "device_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "channel_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "token",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "caller_id",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "created_time_ms",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "updated_time_ms",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_short_id",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "v_type",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "srv_msg_id",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CreateVoipRequestBody": {
    "name": "CreateVoipRequestBody",
    "fields": [
      {
        "name": "idempotent_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "v_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "con_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "srv_msg_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ref_channel_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "voip_mode",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CreateVoipResponseBody": {
    "name": "CreateVoipResponseBody",
    "fields": [
      {
        "name": "info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VoipInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "voip_mode",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CallVoipRequestBody": {
    "name": "CallVoipRequestBody",
    "fields": [
      {
        "name": "callee_ids",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "channel_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "v_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ref_channel_users",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "con_id",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "CallVoipResponseBody": {
    "name": "CallVoipResponseBody",
    "fields": [
      {
        "name": "info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VoipInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "callee_ids",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "extra_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ref_channel_id",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "voip_mode",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateVoipRequestBody": {
    "name": "UpdateVoipRequestBody",
    "fields": [
      {
        "name": "channel_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "v_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateVoipResponseBody": {
    "name": "UpdateVoipResponseBody",
    "fields": [
      {
        "name": "info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VoipInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "voip_mode",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "callees",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "JoinVoipRequestBody": {
    "name": "JoinVoipRequestBody",
    "fields": [
      {
        "name": "con_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "channel_id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "JoinVoipResponseBody": {
    "name": "JoinVoipResponseBody",
    "fields": [
      {
        "name": "info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VoipInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ChannelHeartBeatRequestBody": {
    "name": "ChannelHeartBeatRequestBody",
    "fields": [
      {
        "name": "channel_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "Profile": {
    "name": "Profile",
    "fields": [
      {
        "name": "nick_name",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "protrait",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "basic_ext_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "detail_ext_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "uid",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ProfileGetInfoRequestBody": {
    "name": "ProfileGetInfoRequestBody",
    "fields": [
      {
        "name": "userid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "from_source",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ProfileGetInfoResponseBody": {
    "name": "ProfileGetInfoResponseBody",
    "fields": [
      {
        "name": "profile",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Profile",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ClientMetric": {
    "name": "ClientMetric",
    "fields": [
      {
        "name": "metric_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "k",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "v",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReportClientMetricsRequestBody": {
    "name": "ReportClientMetricsRequestBody",
    "fields": [
      {
        "name": "report_metrics_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientMetric",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ModifyMessageExtRequestBody": {
    "name": "ModifyMessageExtRequestBody",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ticket",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationApplyInfo": {
    "name": "ConversationApplyInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_id",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "create_time",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "modify_time",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "modify_user",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_uid",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "invite_user_id",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sec_invite_uid",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_reason",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationAuditSwitchRequestBody": {
    "name": "GetConversationAuditSwitchRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationAuditSwitchResponseBody": {
    "name": "GetConversationAuditSwitchResponseBody",
    "fields": [
      {
        "name": "switch_status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationAuditSwitchRequestBody": {
    "name": "UpdateConversationAuditSwitchRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "switch_status",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UpdateConversationAuditSwitchResponseBody": {
    "name": "UpdateConversationAuditSwitchResponseBody",
    "fields": [
      {
        "name": "switch_status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendConversationApplyRequestBody": {
    "name": "SendConversationApplyRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "invite_user_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "invited_user_ids",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "apply_reason",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendConversationApplyResponseBody": {
    "name": "SendConversationApplyResponseBody",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "success_users",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "failed_users",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "exist_users",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "AckConversationApplyRequestBody": {
    "name": "AckConversationApplyRequestBody",
    "fields": [
      {
        "name": "apply_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "AckConversationApplyResponseBody": {
    "name": "AckConversationApplyResponseBody",
    "fields": [
      {
        "name": "apply_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationApplyInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationApplyRequestBody": {
    "name": "GetConversationApplyRequestBody",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationApplyResponseBody": {
    "name": "GetConversationApplyResponseBody",
    "fields": [
      {
        "name": "apply_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationApplyInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetConversationAuditListRequestBody": {
    "name": "GetConversationAuditListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "no_clear_unread",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationAuditListResponseBody": {
    "name": "GetConversationAuditListResponseBody",
    "fields": [
      {
        "name": "apply_info_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationApplyInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationAuditUnreadResponseBody": {
    "name": "GetConversationAuditUnreadResponseBody",
    "fields": [
      {
        "name": "unread_count",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "last_apply_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationApplyInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "BatchGetConversationAuditUnreadRequestBody": {
    "name": "BatchGetConversationAuditUnreadRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ClearConversationAuditUnreadRequestBody": {
    "name": "ClearConversationAuditUnreadRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageInfo": {
    "name": "MessageInfo",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "body",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetMessageInfoByIndexV2RequestBody": {
    "name": "GetMessageInfoByIndexV2RequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "index_in_conversation_v2",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GetMessageByIdRequestBody": {
    "name": "GetMessageByIdRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_message_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessageByIdResponseBody": {
    "name": "GetMessageByIdResponseBody",
    "fields": [
      {
        "name": "msg_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "PreviewerMessagesInConversationRequestBody": {
    "name": "PreviewerMessagesInConversationRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "direction",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "anchor_index",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PreviewerMessagesInConversationResponseBody": {
    "name": "PreviewerMessagesInConversationResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationRecentMessage": {
    "name": "ConversationRecentMessage",
    "fields": [
      {
        "name": "conversation_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "version",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "badge_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ext_messages",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetRecentMessageReqBody": {
    "name": "GetRecentMessageReqBody",
    "fields": [
      {
        "name": "conversation_version",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "source",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_user",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetCmdMessageReqBody": {
    "name": "GetCmdMessageReqBody",
    "fields": [
      {
        "name": "cmd_index",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "source",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "new_user",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetRecentMessageRespBody": {
    "name": "GetRecentMessageRespBody",
    "fields": [
      {
        "name": "next_conversation_version",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "messages",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationRecentMessage",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetCmdMessageRespBody": {
    "name": "GetCmdMessageRespBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_cmd_index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_user_message_cursor",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessageInfoByIndexV2RangeRequestBody": {
    "name": "GetMessageInfoByIndexV2RangeRequestBody",
    "fields": [
      {
        "name": "conversation_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "min_index_in_conversation_v2",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "max_index_in_conversation_v2",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "direction",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMessageInfoByIndexV2RangeResponseBody": {
    "name": "GetMessageInfoByIndexV2RangeResponseBody",
    "fields": [
      {
        "name": "infos",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "next_index_in_conversation_v2",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageByInitRequestBody": {
    "name": "MessageByInitRequestBody",
    "fields": [
      {
        "name": "version",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MessageByInitResponseBody": {
    "name": "MessageByInitResponseBody",
    "fields": [
      {
        "name": "messages",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationMessage",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "next_init_version",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_cursor",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cmd_index",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationMessage": {
    "name": "ConversationMessage",
    "fields": [
      {
        "name": "conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "SendFriendApplyRequestBody": {
    "name": "SendFriendApplyRequestBody",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "SendFriendApplyResponseBody": {
    "name": "SendFriendApplyResponseBody",
    "fields": [
      {
        "name": "status",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_code",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "check_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetFriendApplyListRequestBody": {
    "name": "GetFriendApplyListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "get_total_count",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ApplyUserInfo": {
    "name": "ApplyUserInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_time_second",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "profile",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Profile",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetFriendApplyListResponseBody": {
    "name": "GetFriendApplyListResponseBody",
    "fields": [
      {
        "name": "next_cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_list",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ApplyUserInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetFriendReceiveApplyListRequestBody": {
    "name": "GetFriendReceiveApplyListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "get_total_count",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetFriendReceiveApplyListResponseBody": {
    "name": "GetFriendReceiveApplyListResponseBody",
    "fields": [
      {
        "name": "next_cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_list",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ApplyUserInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ReplyFriendApplyRequestBody": {
    "name": "ReplyFriendApplyRequestBody",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "attitude",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "FriendUserInfo": {
    "name": "FriendUserInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "apply_time_second",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "profile",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Profile",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "GetFriendListRequestBody": {
    "name": "GetFriendListRequestBody",
    "fields": [
      {
        "name": "cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "get_total_count",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetFriendListResponseBody": {
    "name": "GetFriendListResponseBody",
    "fields": [
      {
        "name": "next_cursor",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_list",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FriendUserInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DeleteFriendRequestBody": {
    "name": "DeleteFriendRequestBody",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ProfileBatchGetInfoRequestBody": {
    "name": "ProfileBatchGetInfoRequestBody",
    "fields": [
      {
        "name": "userids",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ProfileBatchGetInfoResponseBody": {
    "name": "ProfileBatchGetInfoResponseBody",
    "fields": [
      {
        "name": "profiles",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Profile",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ProfileSearchInfoRequestBody": {
    "name": "ProfileSearchInfoRequestBody",
    "fields": [
      {
        "name": "search_key",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ProfileSearchInfoResponseBody": {
    "name": "ProfileSearchInfoResponseBody",
    "fields": [
      {
        "name": "profile",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Profile",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GlobalMessageSearchRequestBody": {
    "name": "GlobalMessageSearchRequestBody",
    "fields": [
      {
        "name": "search_query",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "start_time",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "end_time",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "frag_size",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GlobalMessageSearchResponseBody": {
    "name": "GlobalMessageSearchResponseBody",
    "fields": [
      {
        "name": "conv_result",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "message_result",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationCoreSearchQuery": {
    "name": "ConversationCoreSearchQuery",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_name",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_status",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "creat_start_time",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "creat_end_time",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "owner_id",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ext_list",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "ConversationCoreSearchRequestBody": {
    "name": "ConversationCoreSearchRequestBody",
    "fields": [
      {
        "name": "search_query",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreSearchQuery",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "frag_size",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationCoreSearchResponseBody": {
    "name": "ConversationCoreSearchResponseBody",
    "fields": [
      {
        "name": "conversations",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreInfo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationMessageSearchRequestBody": {
    "name": "ConversationMessageSearchRequestBody",
    "fields": [
      {
        "name": "search_query",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "start_time",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "end_time",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "frag_size",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationMessageSearchResponseBody": {
    "name": "ConversationMessageSearchResponseBody",
    "fields": [
      {
        "name": "message_result",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "has_more",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "scroll_id",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationMessagePreViewRequestBody": {
    "name": "ConversationMessagePreViewRequestBody",
    "fields": [
      {
        "name": "conv_short_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_index",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ConversationMessagePreViewResponseBody": {
    "name": "ConversationMessagePreViewResponseBody",
    "fields": [
      {
        "name": "message_result",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetMediaUploadConfigResponseBody": {
    "name": "GetMediaUploadConfigResponseBody",
    "fields": [
      {
        "name": "configs",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MediaUploadConfig",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "MediaUploadConfig": {
    "name": "MediaUploadConfig",
    "fields": [
      {
        "name": "type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "resource_space",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "host",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "expiry_time",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "current_time",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "access_key",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "session_token",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "secret_access_key",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetMediaStatusRequestBody": {
    "name": "GetMediaStatusRequestBody",
    "fields": [
      {
        "name": "media_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MediaKey",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "RequestBody": {
    "name": "RequestBody",
    "fields": [
      {
        "name": "send_message_body",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_body",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_init_body",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserInitRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_init_v2_body",
        "number": 203,
        "tag": 1626,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserInitV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_combo_body",
        "number": 204,
        "tag": 1634,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserComboRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_conversation_search_body",
        "number": 206,
        "tag": 1650,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerConversationSearchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_messages_per_user_body",
        "number": 210,
        "tag": 1682,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CheckMessagePerUserRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_by_id_body",
        "number": 211,
        "tag": 1690,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageByIdRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversations_list_body",
        "number": 300,
        "tag": 2402,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationsListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_in_conversation_body",
        "number": 301,
        "tag": 2410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesInConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_messages_checkinfo_in_conversation_body",
        "number": 302,
        "tag": 2418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesCheckInfoInConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_messages_check_info_v2_body",
        "number": 303,
        "tag": 2426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesCheckInfoV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_in_conversation_with_range",
        "number": 304,
        "tag": 2434,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesInConversationWithRangeRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_user_action_body",
        "number": 410,
        "tag": 3282,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendUserActionRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_input_status_body",
        "number": 411,
        "tag": 3290,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendInputStatusRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_body",
        "number": 600,
        "tag": 4802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_info_body",
        "number": 601,
        "tag": 4810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_conversation_body",
        "number": 602,
        "tag": 4818,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_conversation_body",
        "number": 603,
        "tag": 4826,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_conversation_read_body",
        "number": 604,
        "tag": 4834,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkConversationReadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_participants_body",
        "number": 605,
        "tag": 4842,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationParticipantsListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "report_conversation_cursor_body",
        "number": 606,
        "tag": 4850,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReportGetMessagesCursorRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_body",
        "number": 607,
        "tag": 4858,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_v2_body",
        "number": 608,
        "tag": 4866,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_conversation_v2_body",
        "number": 609,
        "tag": 4874,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateConversationV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_v2_body",
        "number": 610,
        "tag": 4882,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_by_favorite_v2_body",
        "number": 611,
        "tag": 4890,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationsPerUserByFavoriteV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_by_top_v2_body",
        "number": 612,
        "tag": 4898,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationsPerUserByTopV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_mark_read_body",
        "number": 613,
        "tag": 4906,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchMarkConversationReadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "dissolve_conversation_body",
        "number": 614,
        "tag": 4914,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DissolveConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversations_checkinfo_body",
        "number": 615,
        "tag": 4922,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationsCheckInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_check_info_v2_body",
        "number": 616,
        "tag": 4930,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationsCheckInfoV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_add_participants_body",
        "number": 650,
        "tag": 5202,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationAddParticipantsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_remove_participants_body",
        "number": 651,
        "tag": 5210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationRemoveParticipantsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "leave_conversation_body",
        "number": 652,
        "tag": 5218,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationLeaveRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_set_role_body",
        "number": 653,
        "tag": 5226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSetRoleRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mget_conversation_participants_body",
        "number": 654,
        "tag": 5234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MgetConversationParticipantsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_conversation_participant_body",
        "number": 655,
        "tag": 5242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationParticipantRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_update_conversation_participant_body",
        "number": 656,
        "tag": 5250,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchUpdateConversationParticipantRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_group_list_body",
        "number": 690,
        "tag": 5522,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationGroupListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_message_body",
        "number": 701,
        "tag": 5610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "recall_message_body",
        "number": 702,
        "tag": 5618,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "RecallMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "reaction_message_body",
        "number": 703,
        "tag": 5626,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReactionMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "sync_message_body",
        "number": 704,
        "tag": 5634,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SyncMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "modify_message_property_body",
        "number": 705,
        "tag": 5642,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyMessagePropertyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ack_message_body",
        "number": 706,
        "tag": 5650,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AckMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_group_info_body",
        "number": 801,
        "tag": 6410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetGroupInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_group_info_body",
        "number": 802,
        "tag": 6418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetGroupInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_group_info_list_body",
        "number": 803,
        "tag": 6426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetGroupInfoListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_core_info_body",
        "number": 901,
        "tag": 7210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationCoreInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_core_info_body",
        "number": 902,
        "tag": 7218,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationCoreInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_core_info_list_body",
        "number": 903,
        "tag": 7226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationCoreInfoListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "upsert_conversation_core_ext_info_body",
        "number": 904,
        "tag": 7234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpsertConversationCoreExtInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_conversation_core_ext_info_body",
        "number": 905,
        "tag": 7242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteConversationCoreExtInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_setting_info_body",
        "number": 920,
        "tag": 7362,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationSettingInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_setting_info_body",
        "number": 921,
        "tag": 7370,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationSettingInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "upsert_conversation_setting_ext_info_body",
        "number": 922,
        "tag": 7378,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpsertConversationSettingExtInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_conversation_setting_ext_info_body",
        "number": 923,
        "tag": 7386,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteConversationSettingExtInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_conversation_body",
        "number": 1000,
        "tag": 8002,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerConversationListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_messages_body",
        "number": 1001,
        "tag": 8010,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerMessagesRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_message_body",
        "number": 1002,
        "tag": 8018,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_conversation_body",
        "number": 1003,
        "tag": 8026,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_all_conversation_body",
        "number": 1004,
        "tag": 8034,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerAllConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_stranger_conversation_read_body",
        "number": 1005,
        "tag": 8042,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkStrangerConversationReadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_stranger_all_conversation_read_body",
        "number": 1006,
        "tag": 8050,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkStrangerAllConversationReadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_unread_count_body",
        "number": 1007,
        "tag": 8058,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerUnreadCountRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_read_index_body",
        "number": 2000,
        "tag": 16002,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationParticipantsReadIndexV3RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_min_index_body",
        "number": 2001,
        "tag": 16010,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationParticipantsMinIndexV3RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_upload_token_body",
        "number": 2003,
        "tag": 16026,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUploadTokenRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_media_urls_body",
        "number": 2004,
        "tag": 16034,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaUrlsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_ticket_body",
        "number": 2005,
        "tag": 16042,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetTicketRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_list_body",
        "number": 2006,
        "tag": 16050,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUserConversationListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_send_message_body",
        "number": 2007,
        "tag": 16058,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastSendMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_recv_message_body",
        "number": 2008,
        "tag": 16066,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastRecvMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_user_counter_body",
        "number": 2009,
        "tag": 16074,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastUserCounterRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "client_ack_body",
        "number": 2010,
        "tag": 16082,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientACKRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_voip_body",
        "number": 2011,
        "tag": 16090,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateVoipRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "call_voip_body",
        "number": 2012,
        "tag": 16098,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CallVoipRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_voip_body",
        "number": 2013,
        "tag": 16106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateVoipRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "channel_heartbeat_body",
        "number": 2014,
        "tag": 16114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ChannelHeartBeatRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_get_info",
        "number": 2015,
        "tag": 16122,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileGetInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "report_client_metrics_body",
        "number": 2016,
        "tag": 16130,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReportClientMetricsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_configs_body",
        "number": 2017,
        "tag": 16138,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConfigsRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "unread_count_report_body",
        "number": 2018,
        "tag": 16146,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UnReadCountReportRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "block_members_body",
        "number": 2019,
        "tag": 16154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BlockMembersRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "block_conversation_body",
        "number": 2020,
        "tag": 16162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BlockConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "modify_message_ext_body",
        "number": 2021,
        "tag": 16170,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyMessageExtRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_switch_body",
        "number": 2022,
        "tag": 16178,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditSwitchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_conversation_audit_switch_body",
        "number": 2023,
        "tag": 16186,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationAuditSwitchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_conversation_apply_body",
        "number": 2024,
        "tag": 16194,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendConversationApplyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ack_conversation_apply_body",
        "number": 2025,
        "tag": 16202,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AckConversationApplyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_apply_body",
        "number": 2026,
        "tag": 16210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationApplyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_list_body",
        "number": 2027,
        "tag": 16218,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_unread_body",
        "number": 2028,
        "tag": 16226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditUnreadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "clear_conversation_audit_unread_body",
        "number": 2029,
        "tag": 16234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClearConversationAuditUnreadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_unread_count_body",
        "number": 2030,
        "tag": 16242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUnreadCountRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_message_p2p_body",
        "number": 2031,
        "tag": 16250,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendMessageP2PRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_blocklist_body",
        "number": 2032,
        "tag": 16258,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetBlockListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_blocklist_body",
        "number": 2033,
        "tag": 16266,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetBlocklistRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_in_blocklist_body",
        "number": 2034,
        "tag": 16274,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CheckInBlockListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_info_by_index_v2_body",
        "number": 2035,
        "tag": 16282,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageInfoByIndexV2RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_message_body",
        "number": 2036,
        "tag": 16290,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "pull_mark_message_body",
        "number": 2037,
        "tag": 16298,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PullMarkMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_get_conversation_participants_readindex",
        "number": 2038,
        "tag": 16306,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchGetConversationParticipantsReadIndexRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_recent_message_body",
        "number": 2039,
        "tag": 16314,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetRecentMessageReqBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_cmd_message_body",
        "number": 2040,
        "tag": 16322,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetCmdMessageReqBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_info_by_index_v2_range_body",
        "number": 2041,
        "tag": 16330,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageInfoByIndexV2RangeRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_get_conversation_audit_unread",
        "number": 2042,
        "tag": 16338,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchGetConversationAuditUnreadRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "message_by_init",
        "number": 2043,
        "tag": 16346,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageByInitRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previewer_messages_in_conversation_body",
        "number": 2044,
        "tag": 16354,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewerMessagesInConversationRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previewer_get_conversation_info_list_body",
        "number": 2045,
        "tag": 16362,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewerGetConversationInfoListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_friend_apply_body",
        "number": 2046,
        "tag": 16370,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendFriendApplyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_apply_list_body",
        "number": 2047,
        "tag": 16378,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendApplyListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_receive_apply_list_body",
        "number": 2048,
        "tag": 16386,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendReceiveApplyListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "reply_friend_apply_body",
        "number": 2049,
        "tag": 16394,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReplyFriendApplyRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_list_body",
        "number": 2050,
        "tag": 16402,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendListRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_friend_body",
        "number": 2051,
        "tag": 16410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteFriendRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_batch_get_info_body",
        "number": 2052,
        "tag": 16418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileBatchGetInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_search_info_body",
        "number": 2053,
        "tag": 16426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileSearchInfoRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_msg_unread_count_report",
        "number": 2054,
        "tag": 16434,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMsgUnreadCountReportRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_msg_get_unread_count",
        "number": 2055,
        "tag": 16442,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMsgGetUnreadCountRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_unmark_message",
        "number": 2056,
        "tag": 16450,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchUnmarkMessageRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "client_batch_ack_body",
        "number": 2057,
        "tag": 16458,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientBatchACKRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "media_upload_config_request_body",
        "number": 2059,
        "tag": 16474,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaUploadConfigRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "media_status_request_body",
        "number": 2060,
        "tag": 16482,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaStatusRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "global_message_search_body",
        "number": 2100,
        "tag": 16802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GlobalMessageSearchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_core_search_body",
        "number": 2101,
        "tag": 16810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreSearchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_message_search_body",
        "number": 2102,
        "tag": 16818,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationMessageSearchRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_message_pre_view_body",
        "number": 2103,
        "tag": 16826,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationMessagePreViewRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_messages_body",
        "number": 2200,
        "tag": 17602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesRequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "vcd_clean_body",
        "number": 9999,
        "tag": 79994,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VcdCleanRequestBody",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "Request": {
    "name": "Request",
    "fields": [
      {
        "name": "cmd",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sequence_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sdk_version",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "token",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "refer",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "build_number",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "body",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "RequestBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "device_id",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "channel",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "device_platform",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "device_type",
        "number": 12,
        "tag": 98,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "os_version",
        "number": 13,
        "tag": 106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version_code",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "config_id",
        "number": 16,
        "tag": 128,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "token_info",
        "number": 17,
        "tag": 138,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "TokenInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "auth_type",
        "number": 18,
        "tag": 144,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "msg_trace",
        "number": 19,
        "tag": 154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MsgTrace",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "retry_count",
        "number": 20,
        "tag": 160,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "TokenInfo": {
    "name": "TokenInfo",
    "fields": [
      {
        "name": "mark_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "app_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_id",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "timestamp",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "app_id_without_hook",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "user_id_without_hook",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ResponseBody": {
    "name": "ResponseBody",
    "fields": [
      {
        "name": "send_message_body",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_body",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_init_body",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserInitResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_init_v2_body",
        "number": 203,
        "tag": 1626,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserInitV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_user_combo_body",
        "number": 204,
        "tag": 1634,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerUserComboResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_per_conversation_search_body",
        "number": 206,
        "tag": 1650,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesPerConversationSearchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_messages_per_user_body",
        "number": 210,
        "tag": 1682,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CheckMessagesPerUserResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_by_id_body",
        "number": 211,
        "tag": 1690,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageByIdResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversations_list_body",
        "number": 300,
        "tag": 2402,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationsListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_in_conversation_body",
        "number": 301,
        "tag": 2410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesInConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_messages_checkinfo_in_conversation_body",
        "number": 302,
        "tag": 2418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesCheckInfoInConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_check_info_v2_body",
        "number": 303,
        "tag": 2426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesCheckInfoV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages_in_conversation_with_range",
        "number": 304,
        "tag": 2434,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessagesInConversationWithRangeResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_user_action_body",
        "number": 410,
        "tag": 3282,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendUserActionResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_input_status_body",
        "number": 411,
        "tag": 3290,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendInputStatusResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "has_new_message_notify",
        "number": 500,
        "tag": 4002,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "NewMessageNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_conversation_read_notify",
        "number": 501,
        "tag": 4010,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkConversationReadNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_info_updated_notify",
        "number": 502,
        "tag": 4018,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoUpdatedNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "stranger_has_new_message_notify",
        "number": 503,
        "tag": 4026,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StrangerNewMessageNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "has_new_direct_push_notify",
        "number": 504,
        "tag": 4034,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "NewDirectPushNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "new_friend_message_notify",
        "number": 507,
        "tag": 4058,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "NewFriendMessageNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "input_status_notify",
        "number": 510,
        "tag": 4082,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InputStatusNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "biz_has_new_direct_push_notify",
        "number": 511,
        "tag": 4090,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BizNewDirectPushNotify",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_body",
        "number": 600,
        "tag": 4802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_info_body",
        "number": 601,
        "tag": 4810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_conversation_body",
        "number": 602,
        "tag": 4818,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_participants_body",
        "number": 605,
        "tag": 4842,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationParticipantsListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversations_info_list_body",
        "number": 607,
        "tag": 4858,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_v2_body",
        "number": 608,
        "tag": 4866,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_conversation_v2_body",
        "number": 609,
        "tag": 4874,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateConversationV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_v2_body",
        "number": 610,
        "tag": 4882,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_by_favorite_v2_body",
        "number": 611,
        "tag": 4890,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListByFavoriteV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_info_list_by_top_v2_body",
        "number": 612,
        "tag": 4898,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationInfoListByTopV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_mark_read_body",
        "number": 613,
        "tag": 4906,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchMarkConversationReadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversations_checkinfo_body",
        "number": 615,
        "tag": 4922,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationsCheckInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversations_check_info_v2_body",
        "number": 616,
        "tag": 4930,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationsCheckInfoV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_add_participants_body",
        "number": 650,
        "tag": 5202,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationAddParticipantsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_remove_participants_body",
        "number": 651,
        "tag": 5210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationRemoveParticipantsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_set_role_body",
        "number": 653,
        "tag": 5226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationSetRoleResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mget_conversation_participants_body",
        "number": 654,
        "tag": 5234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MgetConversationParticipantsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_conversation_participant_body",
        "number": 655,
        "tag": 5242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationParticipantResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_update_conversation_participant_body",
        "number": 656,
        "tag": 5250,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchUpdateConversationParticipantResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_group_list_body",
        "number": 690,
        "tag": 5522,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationGroupListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "reaction_message_body",
        "number": 703,
        "tag": 5626,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReactionMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "sync_message_body",
        "number": 704,
        "tag": 5634,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SyncMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "modify_message_property_body",
        "number": 705,
        "tag": 5642,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyMessagePropertyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ack_message_body",
        "number": 706,
        "tag": 5650,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AckMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_group_info_body",
        "number": 801,
        "tag": 6410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetGroupInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_group_info_body",
        "number": 802,
        "tag": 6418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetGroupInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_groups_info_body",
        "number": 803,
        "tag": 6426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetGroupInfoListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_core_info_body",
        "number": 901,
        "tag": 7210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationCoreInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_core_info_body",
        "number": 902,
        "tag": 7218,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationCoreInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_core_info_list_body",
        "number": 903,
        "tag": 7226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationCoreInfoListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "upsert_conversation_core_ext_info_body",
        "number": 904,
        "tag": 7234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpsertConversationCoreExtInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_conversation_core_ext_info_body",
        "number": 905,
        "tag": 7242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteConversationCoreExtInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_setting_info_body",
        "number": 920,
        "tag": 7362,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationSettingInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_conversation_setting_info_body",
        "number": 921,
        "tag": 7370,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetConversationSettingInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "upsert_conversation_setting_ext_info_body",
        "number": 922,
        "tag": 7378,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpsertConversationSettingExtInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_conversation_setting_ext_info_body",
        "number": 923,
        "tag": 7386,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteConversationSettingExtInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_conversation_body",
        "number": 1000,
        "tag": 8002,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerConversationListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_messages_body",
        "number": 1001,
        "tag": 8010,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerMessagesResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_message_body",
        "number": 1002,
        "tag": 8018,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_conversation_body",
        "number": 1003,
        "tag": 8026,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_stranger_all_conversation_body",
        "number": 1004,
        "tag": 8034,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteStrangerAllConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_stranger_conversation_read_body",
        "number": 1005,
        "tag": 8042,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkStrangerConversationReadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_stranger_all_conversation_read_body",
        "number": 1006,
        "tag": 8050,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkStrangerAllConversationReadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_stranger_unread_count_body",
        "number": 1007,
        "tag": 8058,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetStrangerUnreadCountResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_read_index_body",
        "number": 2000,
        "tag": 16002,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationParticipantsReadIndexV3ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "participants_min_index_body",
        "number": 2001,
        "tag": 16010,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationParticipantsMinIndexV3ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_upload_token_body",
        "number": 2003,
        "tag": 16026,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUploadTokenResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_media_urls_body",
        "number": 2004,
        "tag": 16034,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaUrlsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_ticket_body",
        "number": 2005,
        "tag": 16042,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetTicketResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_list_body",
        "number": 2006,
        "tag": 16050,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUserConversationListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_send_message_body",
        "number": 2007,
        "tag": 16058,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastSendMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_recv_message_body",
        "number": 2008,
        "tag": 16066,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastRecvMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "broadcast_user_counter_body",
        "number": 2009,
        "tag": 16074,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BroadcastUserCounterResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "client_ack_body",
        "number": 2010,
        "tag": 16082,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientACKResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "create_voip_body",
        "number": 2011,
        "tag": 16090,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CreateVoipResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "call_voip_body",
        "number": 2012,
        "tag": 16098,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CallVoipResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_voip_body",
        "number": 2013,
        "tag": 16106,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateVoipResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "channel_heartbeat_body",
        "number": 2014,
        "tag": 16114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ChannelHeartBeatResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_get_info",
        "number": 2015,
        "tag": 16122,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileGetInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "report_client_metrics_body",
        "number": 2016,
        "tag": 16130,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReportClientMetricsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_configs_body",
        "number": 2017,
        "tag": 16138,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConfigsResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "unread_count_report_body",
        "number": 2018,
        "tag": 16146,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UnReadCountReportResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "block_members_body",
        "number": 2019,
        "tag": 16154,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BlockMembersResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "block_conversation_body",
        "number": 2020,
        "tag": 16162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BlockConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "modify_message_ext_body",
        "number": 2021,
        "tag": 16170,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ModifyMessageExtResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_switch_body",
        "number": 2022,
        "tag": 16178,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditSwitchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "update_conversation_audit_switch_body",
        "number": 2023,
        "tag": 16186,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UpdateConversationAuditSwitchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_conversation_apply_body",
        "number": 2024,
        "tag": 16194,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendConversationApplyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "ack_conversation_apply_body",
        "number": 2025,
        "tag": 16202,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AckConversationApplyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_apply_body",
        "number": 2026,
        "tag": 16210,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationApplyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_list_body",
        "number": 2027,
        "tag": 16218,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_conversation_audit_unread_body",
        "number": 2028,
        "tag": 16226,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetConversationAuditUnreadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "clear_conversation_audit_unread_body",
        "number": 2029,
        "tag": 16234,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClearConversationAuditUnreadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_unread_count_body",
        "number": 2030,
        "tag": 16242,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetUnreadCountResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_message_p2p_body",
        "number": 2031,
        "tag": 16250,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendMessageP2PResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_blocklist_body",
        "number": 2032,
        "tag": 16258,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetBlockListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "set_blocklist_body",
        "number": 2033,
        "tag": 16266,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SetBlocklistResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "check_in_blocklist_body",
        "number": 2034,
        "tag": 16274,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CheckInBlockListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_info_by_index_v2_body",
        "number": 2035,
        "tag": 16282,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageInfoByIndexV2ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_message_body",
        "number": 2036,
        "tag": 16290,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "pull_mark_message_body",
        "number": 2037,
        "tag": 16298,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PullMarkMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_get_conversation_participants_readindex",
        "number": 2038,
        "tag": 16306,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchGetConversationParticipantsReadIndexResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_recent_message_body",
        "number": 2039,
        "tag": 16314,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetRecentMessageRespBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_cmd_message_body",
        "number": 2040,
        "tag": 16322,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetCmdMessageRespBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_message_info_by_index_v2_range_body",
        "number": 2041,
        "tag": 16330,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessageInfoByIndexV2RangeResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_get_conversation_audit_unread_body",
        "number": 2042,
        "tag": 16338,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchGetConversationAuditUnreadResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "message_by_init",
        "number": 2043,
        "tag": 16346,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageByInitResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previewer_messages_in_conversation_body",
        "number": 2044,
        "tag": 16354,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewerMessagesInConversationResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "previewer_get_conversation_info_list_body",
        "number": 2045,
        "tag": 16362,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewerGetConversationInfoListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "send_friend_apply_body",
        "number": 2046,
        "tag": 16370,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SendFriendApplyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_apply_list_body",
        "number": 2047,
        "tag": 16378,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendApplyListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_receive_apply_list_body",
        "number": 2048,
        "tag": 16386,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendReceiveApplyListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "reply_friend_apply_body",
        "number": 2049,
        "tag": 16394,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ReplyFriendApplyResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_friend_list_body",
        "number": 2050,
        "tag": 16402,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetFriendListResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "delete_friend_body",
        "number": 2051,
        "tag": 16410,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DeleteFriendResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_batch_get_info_body",
        "number": 2052,
        "tag": 16418,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileBatchGetInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "profile_search_info_body",
        "number": 2053,
        "tag": 16426,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ProfileSearchInfoResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_msg_unread_count_report",
        "number": 2054,
        "tag": 16434,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMsgUnreadCountReportResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "mark_msg_get_unread_count",
        "number": 2055,
        "tag": 16442,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MarkMsgGetUnreadCountResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "batch_unmark_message",
        "number": 2056,
        "tag": 16450,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BatchUnmarkMessageResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "client_batch_ack_body",
        "number": 2057,
        "tag": 16458,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ClientBatchACKResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "media_upload_config_response_body",
        "number": 2059,
        "tag": 16474,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaUploadConfigResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "media_status_response_body",
        "number": 2060,
        "tag": 16482,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMediaStatusResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "global_message_search_body",
        "number": 2100,
        "tag": 16802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GlobalMessageSearchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_core_search_body",
        "number": 2101,
        "tag": 16810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationCoreSearchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_message_search_body",
        "number": 2102,
        "tag": 16818,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationMessageSearchResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "conversation_message_pre_view_body",
        "number": 2103,
        "tag": 16826,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationMessagePreViewResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "get_messages_body",
        "number": 2200,
        "tag": 17602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GetMessagesResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "vcd_clean_body",
        "number": 9999,
        "tag": 79994,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VcdCleanResponseBody",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "Response": {
    "name": "Response",
    "fields": [
      {
        "name": "cmd",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "sequence_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status_code",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "error_desc",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "inbox_type",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "body",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ResponseBody",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "log_id",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "start_time_stamp",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "request_arrived_time",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_execution_end_time",
        "number": 11,
        "tag": 88,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "retry_count",
        "number": 12,
        "tag": 96,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "server_start_time",
        "number": 13,
        "tag": 104,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "region",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BaseText": {
    "name": "BaseText",
    "fields": [
      {
        "name": "text",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BaseImage": {
    "name": "BaseImage",
    "fields": [
      {
        "name": "image_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "url_list",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "display_name",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "resolution",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Resolution",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "decrypt_key",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "fallback_icon_type",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BaseVideo": {
    "name": "BaseVideo",
    "fields": [
      {
        "name": "video_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "video_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cover",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "video_model",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "linkInfo",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resolution",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Resolution",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "BaseUser": {
    "name": "BaseUser",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "nickname",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "description",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "avatar",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "username",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "follower_count",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_verify",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "Button": {
    "name": "Button",
    "fields": [
      {
        "name": "text",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "style",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ButtonStyle",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ButtonStyle": {
    "name": "ButtonStyle",
    "fields": [
      {
        "name": "height",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "width",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "TTL": {
    "name": "TTL",
    "fields": [
      {
        "name": "expired_at",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BaseReq": {
    "name": "BaseReq",
    "fields": [
      {
        "name": "query_data",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "QueryData",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "FallbackInfo": {
    "name": "FallbackInfo",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "BaseResp": {
    "name": "BaseResp",
    "fields": [
      {
        "name": "ttl",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "TTL",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "context_menu",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "min_version",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "QueryData": {
    "name": "QueryData",
    "fields": [
      {
        "name": "resource_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "LinkInfo": {
    "name": "LinkInfo",
    "fields": [
      {
        "name": "url_list",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "action_type",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PreviewHint": {
    "name": "PreviewHint",
    "fields": [
      {
        "name": "sender_preview_text",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "receiver_preview_text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "quote_preview_text",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "Resolution": {
    "name": "Resolution",
    "fields": [
      {
        "name": "width",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "height",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PictureCard": {
    "name": "PictureCard",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "thumbnail",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "fallback",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PictureCardFallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "image_mint",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "thumbnail_mint",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "PictureCardFallbackInfo": {
    "name": "PictureCardFallbackInfo",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "IMUploadAuthToken": {
    "name": "IMUploadAuthToken",
    "fields": [
      {
        "name": "access_key_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "session_token",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "secret_access_key",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "expire_time",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "current_time",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "IMVideoUploadConfig": {
    "name": "IMVideoUploadConfig",
    "fields": [
      {
        "name": "space_name",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "host",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "auth_token",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "IMUploadAuthToken",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "IMImageUploadConfig": {
    "name": "IMImageUploadConfig",
    "fields": [
      {
        "name": "service_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "host",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "auth_token",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "IMUploadAuthToken",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "tiktok_v1_im_upload_config_request": {
    "name": "tiktok_v1_im_upload_config_request",
    "fields": [
      {
        "name": "upload_scene",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "tiktok_v1_im_upload_config_response": {
    "name": "tiktok_v1_im_upload_config_response",
    "fields": [
      {
        "name": "status_code",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "status_msg",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "upload_scene",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "video_upload_config",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "IMVideoUploadConfig",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "image_upload_config",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "IMImageUploadConfig",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "MessageContent": {
    "name": "MessageContent",
    "fields": [
      {
        "name": "image_card",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ImageCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "picture_card",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PictureCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "video_card",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VideoCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "info_card",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InfoCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "sticker_card",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StickerCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "audio_card",
        "number": 14,
        "tag": 114,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AudioCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "common_msg_card",
        "number": 100,
        "tag": 802,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "CommonMsgCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "dynamic_card",
        "number": 101,
        "tag": 810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DynamicCard",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "streak_cmd",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StreakCommandMessage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "VideoCard": {
    "name": "VideoCard",
    "fields": [
      {
        "name": "video",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseVideo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "fallback",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "VideoCardFallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "user_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseUser",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "top_inline_text",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "extra_content",
        "number": 199,
        "tag": 1594,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "VideoCardFallbackInfo": {
    "name": "VideoCardFallbackInfo",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "status",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "AudioCard": {
    "name": "AudioCard",
    "fields": [
      {
        "name": "audio_wave",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "AudioCardWaveformInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "fallback_info",
        "number": 101,
        "tag": 810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 102,
        "tag": 818,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "AudioCardWaveformInfo": {
    "name": "AudioCardWaveformInfo",
    "fields": [
      {
        "name": "volume_levels",
        "number": 1,
        "tag": 13,
        "wire": 5,
        "wireName": "fixed32",
        "type": "float",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "sample_rate",
        "number": 2,
        "tag": 21,
        "wire": 5,
        "wireName": "fixed32",
        "type": "float",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "WelcomeCard": {
    "name": "WelcomeCard",
    "fields": [
      {
        "name": "title",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "button",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Button",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "images",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "position",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "FocusCard": {
    "name": "FocusCard",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "focus_card_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FocusCardInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "description",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text1",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text2",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link_info",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "FocusCardInfo": {
    "name": "FocusCardInfo",
    "fields": [
      {
        "name": "thumbnail",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "text",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ImageCard": {
    "name": "ImageCard",
    "fields": [
      {
        "name": "title",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ImageCardTitle",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "videos",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseVideo",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "link_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "ImageCardTitle": {
    "name": "ImageCardTitle",
    "fields": [
      {
        "name": "image",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "title",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "subtitle",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "button",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Button",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "InfoCard": {
    "name": "InfoCard",
    "fields": [
      {
        "name": "title",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InfoCardTitle",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "content",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InfoCardContent",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "video",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseVideo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "buttons",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "InfoCardButton",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "link_info",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "InfoCardContent": {
    "name": "InfoCardContent",
    "fields": [
      {
        "name": "description",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "contents",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "InfoCardTitle": {
    "name": "InfoCardTitle",
    "fields": [
      {
        "name": "title",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "image",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "InfoCardButton": {
    "name": "InfoCardButton",
    "fields": [
      {
        "name": "text",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "hint",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseText",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "link",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "LinkInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "type",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StickerCard": {
    "name": "StickerCard",
    "fields": [
      {
        "name": "sticker",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "fallback",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StickerCardFallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "sticker_creator_user_info",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UserInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "attachment",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "Attachment",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "sticker_biz_type",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "StickerCardFallbackInfo": {
    "name": "StickerCardFallbackInfo",
    "fields": [
      {
        "name": "placeholder",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "UserInfo": {
    "name": "UserInfo",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "nick_name",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "avatar_thumb",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseImage",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "CommonMsgCard": {
    "name": "CommonMsgCard",
    "fields": [
      {
        "name": "fallback_info",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 8,
        "tag": 66,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "extra_content",
        "number": 200,
        "tag": 1602,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 202,
        "tag": 1618,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "DynamicInfo": {
    "name": "DynamicInfo",
    "fields": [
      {
        "name": "card_key",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "schema",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "card_template",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "business_type",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "business_id",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "default_height",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "default_width",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ui_location_type",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "raw_data",
        "number": 9,
        "tag": 74,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "ab_key",
        "number": 20,
        "tag": 162,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "DynamicCard": {
    "name": "DynamicCard",
    "fields": [
      {
        "name": "dynamic_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "DynamicInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "fallback_info",
        "number": 10,
        "tag": 82,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "FallbackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "preview_hint",
        "number": 11,
        "tag": 90,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "PreviewHint",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "req_base",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseReq",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "resp_base",
        "number": 202,
        "tag": 1618,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "BaseResp",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "Attachment": {
    "name": "Attachment",
    "fields": [
      {
        "name": "type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "id",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "uid",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "cover",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UrlStruct",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "aweme_type",
        "number": 20,
        "tag": 160,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "is_story",
        "number": 21,
        "tag": 168,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UrlStruct": {
    "name": "UrlStruct",
    "fields": [
      {
        "name": "uri",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "url_list",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      }
    ]
  },
  "GroupNameDefinition": {
    "name": "GroupNameDefinition",
    "fields": [
      {
        "name": "user_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "custom_group_name",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GroupListReqParam": {
    "name": "GroupListReqParam",
    "fields": [
      {
        "name": "group_name",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupNameDefinition",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "direction",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "limit",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "GetConversationGroupListRequestBody": {
    "name": "GetConversationGroupListRequestBody",
    "fields": [
      {
        "name": "inbox_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "only_conversation_short_id",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "group_list_req_param",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupListReqParam",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GetConversationGroupListResponseBody": {
    "name": "GetConversationGroupListResponseBody",
    "fields": [
      {
        "name": "data",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupListData",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "GroupListData": {
    "name": "GroupListData",
    "fields": [
      {
        "name": "group_name",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupNameDefinition",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "cursor",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_more",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_count",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversations",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoWithMessage",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ConversationInfoWithMessage": {
    "name": "ConversationInfoWithMessage",
    "fields": [
      {
        "name": "conversation_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ConversationInfoV2",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "messages",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "ConversationGroupPushContent": {
    "name": "ConversationGroupPushContent",
    "fields": [
      {
        "name": "push_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "groups",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "GroupNameDefinition",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "conversation_short_id",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "message_body",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MessageBody",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "StreakUser": {
    "name": "StreakUser",
    "fields": [
      {
        "name": "uid",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "timestamp",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StreakValue": {
    "name": "StreakValue",
    "fields": [
      {
        "name": "users",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StreakUser",
        "kind": "message",
        "repeated": true
      },
      {
        "name": "streak_start",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_counter",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_timezone",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "restorable_before",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "remain_restore_cnt",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_level",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_start_original",
        "number": 8,
        "tag": 64,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_timezone_offset",
        "number": 9,
        "tag": 72,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "total_restore_cnt_this_window",
        "number": 10,
        "tag": 80,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_type",
        "number": 100,
        "tag": 800,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conversation_id",
        "number": 101,
        "tag": 810,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "restore_refresh_window_start_ts",
        "number": 200,
        "tag": 1600,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "restore_refresh_day_cnt",
        "number": 201,
        "tag": 1608,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "StreakCommandMessage": {
    "name": "StreakCommandMessage",
    "fields": [
      {
        "name": "cmd_type",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "streak_value",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StreakValue",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "streak_action",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int32",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "MentionMessageParams": {
    "name": "MentionMessageParams",
    "fields": [
      {
        "name": "has_caption_mode_mention",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_text_mode_mention",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_sticker_mention",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_post_page_mention",
        "number": 4,
        "tag": 32,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_story_mention_after_publish_share_panel",
        "number": 5,
        "tag": 40,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "has_story_mention_after_publish_feed_bottom",
        "number": 6,
        "tag": 48,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "TrackInfo": {
    "name": "TrackInfo",
    "fields": [
      {
        "name": "mention_message_params",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "MentionMessageParams",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "StreakInfo": {
    "name": "StreakInfo",
    "fields": [
      {
        "name": "invite_source",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "OperaBizPersistentExtra": {
    "name": "OperaBizPersistentExtra",
    "fields": [
      {
        "name": "client_source",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "email_prefix",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "batch_task_system_message",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "PersistentExtra": {
    "name": "PersistentExtra",
    "fields": [
      {
        "name": "im_session_id",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "track_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "TrackInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "streak_info",
        "number": 3,
        "tag": 26,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "StreakInfo",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "opera_biz_persistent_extra",
        "number": 201,
        "tag": 1610,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "OperaBizPersistentExtra",
        "kind": "message",
        "repeated": false
      }
    ]
  },
  "UserInfoStruct": {
    "name": "UserInfoStruct",
    "fields": [
      {
        "name": "user_base",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UserBaseDTO",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "id",
        "number": 7,
        "tag": 56,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UserBaseDTO": {
    "name": "UserBaseDTO",
    "fields": [
      {
        "name": "id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "nickname",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "region",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "RegionStruct",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "language",
        "number": 7,
        "tag": 58,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "RegionStruct": {
    "name": "RegionStruct",
    "fields": [
      {
        "name": "region",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "registration_country",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "UserRelationStruct": {
    "name": "UserRelationStruct",
    "fields": [
      {
        "name": "isMaf",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "isMuf",
        "number": 2,
        "tag": 16,
        "wire": 0,
        "wireName": "varint",
        "type": "bool",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "TransientExtra": {
    "name": "TransientExtra",
    "fields": [
      {
        "name": "sender_user_info",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UserInfoStruct",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "receiver_user_info",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UserInfoStruct",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "labels",
        "number": 4,
        "tag": 34,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": true
      },
      {
        "name": "user_relation_info",
        "number": 5,
        "tag": 42,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "UserRelationStruct",
        "kind": "message",
        "repeated": false
      },
      {
        "name": "timezone",
        "number": 6,
        "tag": 50,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "string",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "ExtField": {
    "name": "ExtField",
    "fields": [
      {
        "name": "field_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "uint32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_ext",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BizConvCorePersistentExt": {
    "name": "BizConvCorePersistentExt",
    "fields": [
      {
        "name": "fields",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ExtField",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "BizConvCoreTransientExt": {
    "name": "BizConvCoreTransientExt",
    "fields": [
      {
        "name": "fields",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "ExtField",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "SettingExtField": {
    "name": "SettingExtField",
    "fields": [
      {
        "name": "field_id",
        "number": 1,
        "tag": 8,
        "wire": 0,
        "wireName": "varint",
        "type": "uint32",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "conv_ext",
        "number": 2,
        "tag": 18,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "bytes",
        "kind": "scalar",
        "repeated": false
      },
      {
        "name": "version",
        "number": 3,
        "tag": 24,
        "wire": 0,
        "wireName": "varint",
        "type": "int64",
        "kind": "scalar",
        "repeated": false
      }
    ]
  },
  "BizConvSettingPersistentExt": {
    "name": "BizConvSettingPersistentExt",
    "fields": [
      {
        "name": "fields",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SettingExtField",
        "kind": "message",
        "repeated": true
      }
    ]
  },
  "BizConvSettingTransientExt": {
    "name": "BizConvSettingTransientExt",
    "fields": [
      {
        "name": "fields",
        "number": 1,
        "tag": 10,
        "wire": 2,
        "wireName": "length-delimited",
        "type": "SettingExtField",
        "kind": "message",
        "repeated": true
      }
    ]
  }
} as const;
