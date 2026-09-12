# Commands without a recovered HTTP route

These commands exist in the enum but were not mapped to a route by the route registry scanner.

| cmd | symbol | classification | request type | response type |
|---:|---|---|---|---|
| 0 | `IMCMD_NOT_USED` | `enum-only` | `—` | `—` |
| 201 | `GET_MESSAGES_BY_USER_INIT` | `proto-no-route` | `MessagesPerUserInitRequestBody` | `MessagesPerUserInitResponseBody` |
| 202 | `REPORT_GET_MESSAGES_CURSOR` | `enum-only` | `—` | `—` |
| 210 | `CHECK_MESSAGES_BY_USER` | `proto-no-route` | `CheckMessagePerUserRequestBody` | `CheckMessagesPerUserResponseBody` |
| 303 | `GET_MESSAGES_CHECK_INFO_V2` | `proto-no-route` | `GetMessagesCheckInfoV2RequestBody` | `GetMessagesCheckInfoV2ResponseBody` |
| 402 | `SEND_CLIENT_FOREGROUND` | `enum-only` | `—` | `—` |
| 403 | `SEND_CLIENT_BACKGROUND` | `enum-only` | `—` | `—` |
| 500 | `NEW_MSG_NOTIFY` | `notify/response-only` | `—` | `NewMessageNotify` |
| 501 | `MARK_READ_NOTIFY` | `notify/response-only` | `—` | `MarkConversationReadNotify` |
| 502 | `CONVERSATION_INFO_UPDATED_NOTIFY` | `notify/response-only` | `—` | `ConversationInfoUpdatedNotify` |
| 504 | `NEW_DIRECT_PUSH_NOTIFY` | `notify/response-only` | `—` | `NewDirectPushNotify` |
| 505 | `NEW_BROADCAST_MSG_NOTIFY` | `enum-only` | `—` | `—` |
| 506 | `NEW_BROADCAST_CMD_MSG_NOTIFY` | `enum-only` | `—` | `—` |
| 507 | `NEW_PREVIEW_MSG_NOTIFY` | `notify/response-only` | `—` | `NewFriendMessageNotify` |
| 508 | `NEW_FRIEND_MSG_NOTIFY` | `enum-only` | `—` | `—` |
| 510 | `NEW_INPUT_STATUS_NOTIFY` | `notify/response-only` | `—` | `InputStatusNotify` |
| 511 | `BIZ_DIRECT_PUSH_NOTIFY` | `notify/response-only` | `—` | `BizNewDirectPushNotify` |
| 600 | `GET_CONVERSATION_INFO` | `proto-no-route` | `GetConversationInfoRequestBody` | `GetConversationInfoResponseBody` |
| 601 | `SET_CONVERSATION_INFO` | `proto-no-route` | `SetConversationInfoRequestBody` | `SetConversationInfoResponseBody` |
| 602 | `CREATE_CONVERSATION` | `proto-no-route` | `CreateConversationRequestBody` | `CreateConversationResponseBody` |
| 604 | `MARK_CONVERSATION_READ` | `proto-no-route` | `MarkConversationReadRequestBody` | `—` |
| 607 | `GET_CONVERSATION_INFO_LIST` | `proto-no-route` | `GetConversationInfoListRequestBody` | `GetConversationInfoListResponseBody` |
| 613 | `BATCH_MARK_CONVERSATION_READ` | `proto-no-route` | `BatchMarkConversationReadRequestBody` | `BatchMarkConversationReadResponseBody` |
| 616 | `GET_CONVERSATIONS_CHECK_INFO_V2` | `proto-no-route` | `GetConversationsCheckInfoV2RequestBody` | `GetConversationsCheckInfoV2ResponseBody` |
| 617 | `BATCH_DELETE_CONVERSATIONS` | `enum-only` | `—` | `—` |
| 653 | `CONVERSATION_SET_ROLE` | `proto-no-route` | `ConversationSetRoleRequestBody` | `ConversationSetRoleResponseBody` |
| 656 | `BATCH_UPDATE_CONVERSATION_PARTICIPANT` | `proto-no-route` | `BatchUpdateConversationParticipantRequestBody` | `BatchUpdateConversationParticipantResponseBody` |
| 703 | `REACTION_MESSAGE` | `proto-no-route` | `ReactionMessageRequestBody` | `ReactionMessageResponseBody` |
| 704 | `SYNC_MESSAGE` | `proto-no-route` | `SyncMessageRequestBody` | `SyncMessageResponseBody` |
| 801 | `GET_GROUP_INFO` | `proto-no-route` | `GetGroupInfoRequestBody` | `GetGroupInfoResponseBody` |
| 802 | `SET_GROUP_INFO` | `proto-no-route` | `SetGroupInfoRequestBody` | `SetGroupInfoResponseBody` |
| 803 | `GET_GROUP_INFO_LIST` | `proto-no-route` | `GetGroupInfoListRequestBody` | `GetGroupInfoListResponseBody` |
| 903 | `GET_CONVERSATION_CORE_INFO_LIST` | `proto-no-route` | `GetConversationCoreInfoListRequestBody` | `GetConversationCoreInfoListResponseBody` |
| 920 | `GET_CONVERSATION_SETTING_INFO` | `proto-no-route` | `GetConversationSettingInfoRequestBody` | `GetConversationSettingInfoResponseBody` |
| 1008 | `GET_STRANGER_UNREAD_COUNT` | `enum-only` | `—` | `—` |
| 1099 | `STRANGER_NEW_MSG_NOTIFY` | `enum-only` | `—` | `—` |
| 2010 | `CLIENT_ACK` | `proto-no-route` | `ClientACKRequestBody` | `ClientACKResponseBody` |
| 2024 | `SEND_CONVERSATION_APPLY` | `proto-no-route` | `SendConversationApplyRequestBody` | `SendConversationApplyResponseBody` |
| 2025 | `ACK_CONVERSATION_APPLY` | `proto-no-route` | `AckConversationApplyRequestBody` | `AckConversationApplyResponseBody` |
| 2026 | `GET_CONVERSATION_APPLY` | `proto-no-route` | `GetConversationApplyRequestBody` | `GetConversationApplyResponseBody` |
| 2027 | `GET_CONVERSATION_AUDIT_LIST` | `proto-no-route` | `GetConversationAuditListRequestBody` | `GetConversationAuditListResponseBody` |
| 2028 | `GET_CONVERSATION_AUDIT_UNREAD` | `proto-no-route` | `GetConversationAuditUnreadRequestBody` | `GetConversationAuditUnreadResponseBody` |
| 2029 | `CLEAR_CONVERSATION_AUDIT_UNREAD` | `proto-no-route` | `ClearConversationAuditUnreadRequestBody` | `ClearConversationAuditUnreadResponseBody` |
| 2035 | `GET_MESSAGE_INFO_BY_INDEX_V2` | `proto-no-route` | `GetMessageInfoByIndexV2RequestBody` | `GetMessageInfoByIndexV2ResponseBody` |
| 2039 | `GET_RECENT_MESSAGE` | `proto-no-route` | `GetRecentMessageReqBody` | `GetRecentMessageRespBody` |
| 2040 | `GET_CMD_MESSAGE` | `proto-no-route` | `GetCmdMessageReqBody` | `GetCmdMessageRespBody` |
| 2041 | `GET_MESSAGE_INFO_BY_INDEX_V2_RANGE` | `proto-no-route` | `GetMessageInfoByIndexV2RangeRequestBody` | `GetMessageInfoByIndexV2RangeResponseBody` |
| 2042 | `BATCH_GET_CONVERSATION_AUDIT_UNREAD` | `proto-no-route` | `BatchGetConversationAuditUnreadRequestBody` | `BatchGetConversationAuditUnreadResponseBody` |
| 2044 | `PREVIEWER_GET_MESSAGES_BY_CONVERSATION` | `proto-no-route` | `PreviewerMessagesInConversationRequestBody` | `PreviewerMessagesInConversationResponseBody` |
| 2045 | `PREVIEWER_GET_CONVERSATION_INFO_LIST` | `proto-no-route` | `PreviewerGetConversationInfoListRequestBody` | `PreviewerGetConversationInfoListResponseBody` |
| 2046 | `SEND_FRIEND_APPLY` | `proto-no-route` | `SendFriendApplyRequestBody` | `SendFriendApplyResponseBody` |
| 2047 | `GET_FRIEND_APPLY_LIST` | `proto-no-route` | `GetFriendApplyListRequestBody` | `GetFriendApplyListResponseBody` |
| 2048 | `GET_FRIEND_RECEIVE_APPLY_LIST` | `proto-no-route` | `GetFriendReceiveApplyListRequestBody` | `GetFriendReceiveApplyListResponseBody` |
| 2049 | `REPLY_FRIEND_APPLY` | `proto-no-route` | `ReplyFriendApplyRequestBody` | `ReplyFriendApplyResponseBody` |
| 2050 | `GET_FRIEND_LIST` | `proto-no-route` | `GetFriendListRequestBody` | `GetFriendListResponseBody` |
| 2051 | `DELETE_FRIEND` | `proto-no-route` | `DeleteFriendRequestBody` | `DeleteFriendResponseBody` |
| 2052 | `PROFILE_BATCH_GET_INFO` | `proto-no-route` | `ProfileBatchGetInfoRequestBody` | `ProfileBatchGetInfoResponseBody` |
| 2053 | `PROFILE_SEARCH_INFO` | `proto-no-route` | `ProfileSearchInfoRequestBody` | `ProfileSearchInfoResponseBody` |
| 2058 | `JOIN_VOIP` | `enum-only` | `—` | `—` |
| 2100 | `GLOBAL_MESSAGE_SEARCH` | `proto-no-route` | `GlobalMessageSearchRequestBody` | `GlobalMessageSearchResponseBody` |
| 2101 | `GLOBAL_GROUP_SEARCH` | `proto-no-route` | `ConversationCoreSearchRequestBody` | `ConversationCoreSearchResponseBody` |
| 2102 | `CONVERSATION_MESSAGE_SEARCH` | `proto-no-route` | `ConversationMessageSearchRequestBody` | `ConversationMessageSearchResponseBody` |
| 2103 | `CONVERSATION_MESSAGE_PRE_VIEW` | `proto-no-route` | `ConversationMessagePreViewRequestBody` | `ConversationMessagePreViewResponseBody` |
| 9999 | `VCD_CLEAN` | `proto-no-route` | `VcdCleanRequestBody` | `VcdCleanResponseBody` |

`proto-no-route` means protobuf request/response bodies were recovered even though no HTTP route was found.
`enum-only` means neither an HTTP route nor a command-specific body was recovered from the loaded build.
