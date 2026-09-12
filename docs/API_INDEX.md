# IM API index

Recovered from the current TikTok Web bundle used for this dump.

| cmd | symbol | route | request | response |
|---:|---|---|---|---|
| 100 | `SEND_MESSAGE` | `v1/message/send` | `SendMessageRequestBody` | `SendMessageResponseBody` |
| 200 | `GET_MESSAGES_BY_USER` | `v1/message/get_by_user` | `MessagesPerUserRequestBody` | `MessagesPerUserResponseBody` |
| 203 | `GET_MESSAGES_BY_USER_INIT_V2` | `v2/message/get_by_user_init` | `MessagesPerUserInitV2RequestBody` | `MessagesPerUserInitV2ResponseBody` |
| 204 | `GET_MESSAGES_BY_USER_COMBO` | `v1/message/get_by_user_combo` | `MessagesPerUserComboRequestBody` | `MessagesPerUserComboResponseBody` |
| 206 | `GET_MESSAGES_BY_CONVERSATION_SEARCH` | `v1/message/v1/message/get_by_conversation_search` | `MessagesPerConversationSearchRequestBody` | `MessagesPerConversationSearchResponseBody` |
| 211 | `GET_MESSAGE_INFO_BY_SERVER_ID` | `v1/message/get_by_id` | `GetMessageByIdRequestBody` | `GetMessageByIdResponseBody` |
| 300 | `GET_CONVERSATION_LIST` | `v1/conversation/get_list` | `ConversationsListRequestBody` | `ConversationsListResponseBody` |
| 301 | `GET_MESSAGES_BY_CONVERSATION` | `v1/message/get_by_conversation` | `MessagesInConversationRequestBody` | `MessagesInConversationResponseBody` |
| 302 | `GET_MESSAGES_CHECKINFO_IN_CONVERSATION` | `v1/message/get_checkinfo` | `GetMessagesCheckInfoInConversationRequestBody` | `GetMessagesCheckInfoInConversationResponseBody` |
| 304 | `GET_MESSAGES_BY_CONVERSATION_WITH_RANGE` | `v1/message/get_by_conversation_with_range` | `MessagesInConversationWithRangeRequestBody` | `MessagesInConversationWithRangeResponseBody` |
| 400 | `SEND_ONLINE` | `v1/account/online` | `—` | `—` |
| 401 | `SEND_OFFLINE` | `v1/account/offline` | `—` | `—` |
| 410 | `SEND_USER_ACTION` | `v1/client/user_action` | `SendUserActionRequestBody` | `SendUserActionResponseBody` |
| 411 | `SEND_INPUT_STATUS` | `v1/client/input_status` | `SendInputStatusRequestBody` | `SendInputStatusResponseBody` |
| 603 | `MARK_CONVERSATION_DELETE` | `v1/conversation/delete` | `DeleteConversationRequestBody` | `—` |
| 605 | `CONVERSATION_PARTICIPANTS_LIST` | `v1/conversation/participants_list` | `ConversationParticipantsListRequestBody` | `ConversationParticipantsListResponseBody` |
| 608 | `GET_CONVERSATION_INFO_V2` | `v2/conversation/get_info` | `GetConversationInfoV2RequestBody` | `GetConversationInfoV2ResponseBody` |
| 609 | `CREATE_CONVERSATION_V2` | `v2/conversation/create` | `CreateConversationV2RequestBody` | `CreateConversationV2ResponseBody` |
| 610 | `GET_CONVERSATION_INFO_LIST_V2` | `v2/conversation/get_info_list` | `GetConversationInfoListV2RequestBody` | `GetConversationInfoListV2ResponseBody` |
| 611 | `GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2` | `v2/conversation/get_by_favorite` | `ConversationsPerUserByFavoriteV2RequestBody` | `GetConversationInfoListByFavoriteV2ResponseBody` |
| 612 | `GET_CONVERSATION_INFO_LIST_BY_TOP_V2` | `v2/conversation/get_by_top` | `ConversationsPerUserByTopV2RequestBody` | `GetConversationInfoListByTopV2ResponseBody` |
| 614 | `DISSOLVE_CONVERSATION` | `v1/conversation/dissolve` | `DissolveConversationRequestBody` | `—` |
| 615 | `GET_CONVERSATIONS_CHECKINFO` | `v1/conversation/get_checkinfo` | `GetConversationsCheckInfoRequestBody` | `GetConversationsCheckInfoResponseBody` |
| 650 | `ADD_CONVERSATION_PARTICIPANTS` | `v1/conversation/add_participants` | `ConversationAddParticipantsRequestBody` | `ConversationAddParticipantsResponseBody` |
| 651 | `REMOVE_CONVERSATION_PARTICIPANTS` | `v1/conversation/remove_participants` | `ConversationRemoveParticipantsRequestBody` | `ConversationRemoveParticipantsResponseBody` |
| 652 | `LEAVE_CONVERSATION` | `v1/conversation/leave` | `ConversationLeaveRequestBody` | `—` |
| 654 | `MGET_CONVERSATION_PARTICIPANTS` | `v1/conversation/mget_participants` | `MgetConversationParticipantsRequestBody` | `MgetConversationParticipantsResponseBody` |
| 655 | `UPDATE_CONVERSATION_PARTICIPANT` | `v1/conversation/update_participant` | `UpdateConversationParticipantRequestBody` | `UpdateConversationParticipantResponseBody` |
| 690 | `GET_CONVERSATION_GROUP_LIST` | `v1/conversation/get_group_list` | `GetConversationGroupListRequestBody` | `GetConversationGroupListResponseBody` |
| 701 | `DELETE_MESSAGE` | `v1/message/delete` | `DeleteMessageRequestBody` | `—` |
| 702 | `RECALL_MESSAGE` | `v1/message/recall` | `RecallMessageRequestBody` | `—` |
| 705 | `SET_MESSAGE_PROPERTY` | `v1/message/set_property` | `ModifyMessagePropertyRequestBody` | `ModifyMessagePropertyResponseBody` |
| 706 | `ACK_MESSAGE` | `v1/message/ack` | `AckMessageRequestBody` | `AckMessageResponseBody` |
| 901 | `GET_CONVERSATION_CORE_INFO` | `v1/conversation/get_core_info` | `GetConversationCoreInfoRequestBody` | `GetConversationCoreInfoResponseBody` |
| 902 | `SET_CONVERSATION_CORE_INFO` | `v1/conversation/set_core_info` | `SetConversationCoreInfoRequestBody` | `SetConversationCoreInfoResponseBody` |
| 904 | `UPSERT_CONVERSATION_CORE_EXT_INFO` | `v1/conversation/upsert_core_ext_info` | `UpsertConversationCoreExtInfoRequestBody` | `UpsertConversationCoreExtInfoResponseBody` |
| 921 | `SET_CONVERSATION_SETTING_INFO` | `v1/conversation/set_setting_info` | `SetConversationSettingInfoRequestBody` | `SetConversationSettingInfoResponseBody` |
| 922 | `UPSERT_CONVERSATION_SETTING_EXT_INFO` | `v1/conversation/upsert_settings_ext` | `UpsertConversationSettingExtInfoRequestBody` | `UpsertConversationSettingExtInfoResponseBody` |
| 1001 | `GET_STRANGER_CONVERSATION_LIST` | `v1/stranger/get_conversation_list` | `GetStrangerMessagesRequestBody` | `GetStrangerMessagesResponseBody` |
| 1002 | `GET_STRANGER_MESSAGES_IN_CONVERSATION` | `v1/stranger/get_messages` | `DeleteStrangerMessageRequestBody` | `DeleteStrangerMessageResponseBody` |
| 1003 | `DELETE_STRANGER_MESSAGE` | `v1/stranger/delete_message` | `DeleteStrangerConversationRequestBody` | `DeleteStrangerConversationResponseBody` |
| 1004 | `DELETE_STRANGER_CONVERSATION` | `v1/stranger/delete_conversation` | `DeleteStrangerAllConversationRequestBody` | `DeleteStrangerAllConversationResponseBody` |
| 1005 | `DELETE_ALL_STRANGER_CONVERSATIONS` | `v1/stranger/delete_all_conversations` | `MarkStrangerConversationReadRequestBody` | `MarkStrangerConversationReadResponseBody` |
| 1006 | `MARK_STRANGER_CONVERSATION_READ` | `v1/stranger/mark_read_conversation` | `MarkStrangerAllConversationReadRequestBody` | `MarkStrangerAllConversationReadResponseBody` |
| 1007 | `MARK_ALL_STRANGER_CONVERSATIONS_READ` | `v1/stranger/mark_read_all_conversations` | `GetStrangerUnreadCountRequestBody` | `GetStrangerUnreadCountResponseBody` |
| 2000 | `GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3` | `v3/conversation/get_read_index` | `GetConversationParticipantsReadIndexV3RequestBody` | `GetConversationParticipantsReadIndexV3ResponseBody` |
| 2001 | `GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3` | `v3/conversation/get_min_index` | `GetConversationParticipantsMinIndexV3RequestBody` | `GetConversationParticipantsMinIndexV3ResponseBody` |
| 2002 | `MARK_CONVERSATION_READ_V3` | `v3/conversation/mark_read` | `—` | `—` |
| 2003 | `GET_MEDIA_UPLOAD_TOKEN` | `tiktok/v1/im/upload_config` | `GetUploadTokenRequestBody` | `GetUploadTokenResponseBody` |
| 2004 | `GET_MEDIA_URLS` | `v1/media/get_urls` | `GetMediaUrlsRequestBody` | `GetMediaUrlsResponseBody` |
| 2005 | `GET_TICKET` | `v1/conversation/get_ticket` | `GetTicketRequestBody` | `GetTicketResponseBody` |
| 2006 | `GET_USER_CONVERSATION_LIST` | `v1/conversation/list` | `GetUserConversationListRequestBody` | `GetUserConversationListResponseBody` |
| 2007 | `BROADCAST_SEND_MESSAGE` | `v1/broadcast/send_message` | `BroadcastSendMessageRequestBody` | `BroadcastSendMessageResponseBody` |
| 2008 | `BROADCAST_RECV_MESSAGE` | `v1/broadcast/recv_message` | `BroadcastRecvMessageRequestBody` | `BroadcastRecvMessageResponseBody` |
| 2009 | `BROADCAST_USER_COUNTER` | `v1/broadcast/user_counter` | `BroadcastUserCounterRequestBody` | `BroadcastUserCounterResponseBody` |
| 2011 | `CREATE_VOIP` | `v1/voip/create` | `CreateVoipRequestBody` | `CreateVoipResponseBody` |
| 2012 | `CALL_VOIP` | `v1/voip/call` | `CallVoipRequestBody` | `CallVoipResponseBody` |
| 2013 | `UPDATE_VOIP` | `v1/voip/update` | `UpdateVoipRequestBody` | `UpdateVoipResponseBody` |
| 2014 | `HEARTBEAT_CHANNEL` | `v1/channel/heartbeat` | `ChannelHeartBeatRequestBody` | `ChannelHeartBeatResponseBody` |
| 2015 | `PROFILE_GET_INFO` | `v1/profile/get_info` | `ProfileGetInfoRequestBody` | `ProfileGetInfoResponseBody` |
| 2016 | `REPORT_CLIENT_METRICS` | `v1/client/report_metrics` | `ReportClientMetricsRequestBody` | `ReportClientMetricsResponseBody` |
| 2017 | `GET_CONFIGS` | `v1/config/get` | `GetConfigsRequestBody` | `GetConfigsResponseBody` |
| 2018 | `UNREAD_COUNT_REPORT` | `v1/client/unread_count` | `UnReadCountReportRequestBody` | `UnReadCountReportResponseBody` |
| 2019 | `BLOCK_MEMBERS` | `v1/conversation/block_member` | `BlockMembersRequestBody` | `BlockMembersResponseBody` |
| 2020 | `BLOCK_CONVERSATION` | `v1/conversation/block_conversation` | `BlockConversationRequestBody` | `BlockConversationResponseBody` |
| 2021 | `MODIFY_MESSAGE_EXT` | `v1/message/modify_ext` | `ModifyMessageExtRequestBody` | `ModifyMessageExtResponseBody` |
| 2022 | `GET_CONVERSATION_AUDIT_SWITCH` | `v1/conversation/get_audit` | `GetConversationAuditSwitchRequestBody` | `GetConversationAuditSwitchResponseBody` |
| 2023 | `UPDATE_CONVERSATION_AUDIT_SWITCH` | `v1/conversation/update_audit` | `UpdateConversationAuditSwitchRequestBody` | `UpdateConversationAuditSwitchResponseBody` |
| 2030 | `GET_UNREAD_COUNT` | `v1/client/get_unread_count` | `GetUnreadCountRequestBody` | `GetUnreadCountResponseBody` |
| 2031 | `SEND_MESSAGE_P2P` | `v1/send_message/p2p` | `SendMessageP2PRequestBody` | `SendMessageP2PResponseBody` |
| 2032 | `GET_BLOCKLIST` | `v1/blocklist/get` | `GetBlockListRequestBody` | `GetBlockListResponseBody` |
| 2033 | `SET_BLOCKLIST` | `v1/blocklist/set` | `SetBlocklistRequestBody` | `SetBlocklistResponseBody` |
| 2034 | `CHECK_IN_BLOCKLIST` | `v1/blocklist/check` | `CheckInBlockListRequestBody` | `CheckInBlockListResponseBody` |
| 2036 | `MARK_MESSAGE` | `v1/message/mark` | `MarkMessageRequestBody` | `MarkMessageResponseBody` |
| 2037 | `PULL_MARK_MESSAGE` | `v1/message/pull_mark` | `PullMarkMessageRequestBody` | `PullMarkMessageResponseBody` |
| 2038 | `BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX` | `v1/conversation/batch_get_conversation_participants_readindex` | `BatchGetConversationParticipantsReadIndexRequestBody` | `BatchGetConversationParticipantsReadIndexResponseBody` |
| 2043 | `GET_MESSAGE_BY_INIT` | `v1/message/get_message_by_init` | `MessageByInitRequestBody` | `MessageByInitResponseBody` |
| 2054 | `MARK_MSG_UNREAD_COUNT_REPORT` | `v1/message/report_mark_count` | `MarkMsgUnreadCountReportRequestBody` | `MarkMsgUnreadCountReportResponseBody` |
| 2055 | `MARK_MSG_GET_UNREAD_COUNT` | `v1/message/get_mark_count` | `MarkMsgGetUnreadCountRequestBody` | `MarkMsgGetUnreadCountResponseBody` |
| 2056 | `BATCH_UNMARK_MESSAGE` | `v1/message/batch_unmark` | `BatchUnmarkMessageRequestBody` | `BatchUnmarkMessageResponseBody` |
| 2057 | `CLIENT_BATCH_ACK` | `v1/client/batch_ack` | `ClientBatchACKRequestBody` | `ClientBatchACKResponseBody` |
| 2059 | `GET_MEDIA_UPLOAD_CONFIG` | `v1/media/upload_config` | `GetMediaUploadConfigRequestBody` | `GetMediaUploadConfigResponseBody` |
| 2060 | `GET_MEDIA_STATUS` | `v1/media/get_status` | `GetMediaStatusRequestBody` | `GetMediaStatusResponseBody` |
| 2200 | `GET_MESSAGES` | `v1/message/get` | `GetMessagesRequestBody` | `GetMessagesResponseBody` |

## Notes

- `cmd` values come from the recovered `IMCMD` enum.
- Request/response body field numbers generally match the command number.
- Routes and module IDs are build-specific and can change.
- A route being present in the client bundle does not guarantee that it is usable in every account/region/session.
