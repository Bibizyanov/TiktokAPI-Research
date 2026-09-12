// Generated enum registry.

export const ENUMS = {
  "IMCMD": {
    "IMCMD_NOT_USED": 0,
    "SEND_MESSAGE": 100,
    "GET_MESSAGES_BY_USER": 200,
    "GET_MESSAGES_BY_USER_INIT": 201,
    "REPORT_GET_MESSAGES_CURSOR": 202,
    "GET_MESSAGES_BY_USER_INIT_V2": 203,
    "GET_MESSAGES_BY_USER_COMBO": 204,
    "GET_MESSAGES_BY_CONVERSATION_SEARCH": 206,
    "CHECK_MESSAGES_BY_USER": 210,
    "GET_MESSAGE_INFO_BY_SERVER_ID": 211,
    "GET_CONVERSATION_LIST": 300,
    "GET_MESSAGES_BY_CONVERSATION": 301,
    "GET_MESSAGES_CHECKINFO_IN_CONVERSATION": 302,
    "GET_MESSAGES_CHECK_INFO_V2": 303,
    "GET_MESSAGES_BY_CONVERSATION_WITH_RANGE": 304,
    "SEND_ONLINE": 400,
    "SEND_OFFLINE": 401,
    "SEND_CLIENT_FOREGROUND": 402,
    "SEND_CLIENT_BACKGROUND": 403,
    "SEND_USER_ACTION": 410,
    "SEND_INPUT_STATUS": 411,
    "NEW_MSG_NOTIFY": 500,
    "MARK_READ_NOTIFY": 501,
    "CONVERSATION_INFO_UPDATED_NOTIFY": 502,
    "NEW_DIRECT_PUSH_NOTIFY": 504,
    "NEW_INPUT_STATUS_NOTIFY": 510,
    "NEW_BROADCAST_MSG_NOTIFY": 505,
    "NEW_BROADCAST_CMD_MSG_NOTIFY": 506,
    "NEW_PREVIEW_MSG_NOTIFY": 507,
    "NEW_FRIEND_MSG_NOTIFY": 508,
    "BIZ_DIRECT_PUSH_NOTIFY": 511,
    "GET_CONVERSATION_INFO": 600,
    "SET_CONVERSATION_INFO": 601,
    "CREATE_CONVERSATION": 602,
    "MARK_CONVERSATION_DELETE": 603,
    "MARK_CONVERSATION_READ": 604,
    "GET_CONVERSATION_INFO_LIST": 607,
    "GET_CONVERSATION_INFO_V2": 608,
    "CREATE_CONVERSATION_V2": 609,
    "GET_CONVERSATION_INFO_LIST_V2": 610,
    "GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2": 611,
    "GET_CONVERSATION_INFO_LIST_BY_TOP_V2": 612,
    "BATCH_MARK_CONVERSATION_READ": 613,
    "DISSOLVE_CONVERSATION": 614,
    "GET_CONVERSATIONS_CHECKINFO": 615,
    "GET_CONVERSATIONS_CHECK_INFO_V2": 616,
    "BATCH_DELETE_CONVERSATIONS": 617,
    "CONVERSATION_PARTICIPANTS_LIST": 605,
    "ADD_CONVERSATION_PARTICIPANTS": 650,
    "REMOVE_CONVERSATION_PARTICIPANTS": 651,
    "LEAVE_CONVERSATION": 652,
    "CONVERSATION_SET_ROLE": 653,
    "MGET_CONVERSATION_PARTICIPANTS": 654,
    "UPDATE_CONVERSATION_PARTICIPANT": 655,
    "BATCH_UPDATE_CONVERSATION_PARTICIPANT": 656,
    "GET_CONVERSATION_GROUP_LIST": 690,
    "DELETE_MESSAGE": 701,
    "RECALL_MESSAGE": 702,
    "REACTION_MESSAGE": 703,
    "SYNC_MESSAGE": 704,
    "SET_MESSAGE_PROPERTY": 705,
    "ACK_MESSAGE": 706,
    "GET_GROUP_INFO": 801,
    "SET_GROUP_INFO": 802,
    "GET_GROUP_INFO_LIST": 803,
    "GET_CONVERSATION_CORE_INFO": 901,
    "SET_CONVERSATION_CORE_INFO": 902,
    "GET_CONVERSATION_CORE_INFO_LIST": 903,
    "UPSERT_CONVERSATION_CORE_EXT_INFO": 904,
    "GET_CONVERSATION_SETTING_INFO": 920,
    "SET_CONVERSATION_SETTING_INFO": 921,
    "UPSERT_CONVERSATION_SETTING_EXT_INFO": 922,
    "GET_STRANGER_CONVERSATION_LIST": 1001,
    "GET_STRANGER_MESSAGES_IN_CONVERSATION": 1002,
    "DELETE_STRANGER_MESSAGE": 1003,
    "DELETE_STRANGER_CONVERSATION": 1004,
    "DELETE_ALL_STRANGER_CONVERSATIONS": 1005,
    "MARK_STRANGER_CONVERSATION_READ": 1006,
    "MARK_ALL_STRANGER_CONVERSATIONS_READ": 1007,
    "GET_STRANGER_UNREAD_COUNT": 1008,
    "STRANGER_NEW_MSG_NOTIFY": 1099,
    "GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3": 2000,
    "GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3": 2001,
    "MARK_CONVERSATION_READ_V3": 2002,
    "GET_MEDIA_UPLOAD_TOKEN": 2003,
    "GET_MEDIA_URLS": 2004,
    "GET_TICKET": 2005,
    "GET_USER_CONVERSATION_LIST": 2006,
    "BROADCAST_SEND_MESSAGE": 2007,
    "BROADCAST_RECV_MESSAGE": 2008,
    "BROADCAST_USER_COUNTER": 2009,
    "CLIENT_ACK": 2010,
    "CREATE_VOIP": 2011,
    "CALL_VOIP": 2012,
    "UPDATE_VOIP": 2013,
    "HEARTBEAT_CHANNEL": 2014,
    "PROFILE_GET_INFO": 2015,
    "REPORT_CLIENT_METRICS": 2016,
    "GET_CONFIGS": 2017,
    "UNREAD_COUNT_REPORT": 2018,
    "BLOCK_MEMBERS": 2019,
    "BLOCK_CONVERSATION": 2020,
    "MODIFY_MESSAGE_EXT": 2021,
    "GET_CONVERSATION_AUDIT_SWITCH": 2022,
    "UPDATE_CONVERSATION_AUDIT_SWITCH": 2023,
    "SEND_CONVERSATION_APPLY": 2024,
    "ACK_CONVERSATION_APPLY": 2025,
    "GET_CONVERSATION_APPLY": 2026,
    "GET_CONVERSATION_AUDIT_LIST": 2027,
    "GET_CONVERSATION_AUDIT_UNREAD": 2028,
    "CLEAR_CONVERSATION_AUDIT_UNREAD": 2029,
    "GET_UNREAD_COUNT": 2030,
    "SEND_MESSAGE_P2P": 2031,
    "GET_BLOCKLIST": 2032,
    "SET_BLOCKLIST": 2033,
    "CHECK_IN_BLOCKLIST": 2034,
    "GET_MESSAGE_INFO_BY_INDEX_V2": 2035,
    "MARK_MESSAGE": 2036,
    "PULL_MARK_MESSAGE": 2037,
    "BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX": 2038,
    "GET_RECENT_MESSAGE": 2039,
    "GET_CMD_MESSAGE": 2040,
    "GET_MESSAGE_INFO_BY_INDEX_V2_RANGE": 2041,
    "BATCH_GET_CONVERSATION_AUDIT_UNREAD": 2042,
    "GET_MESSAGE_BY_INIT": 2043,
    "PREVIEWER_GET_MESSAGES_BY_CONVERSATION": 2044,
    "PREVIEWER_GET_CONVERSATION_INFO_LIST": 2045,
    "SEND_FRIEND_APPLY": 2046,
    "GET_FRIEND_APPLY_LIST": 2047,
    "GET_FRIEND_RECEIVE_APPLY_LIST": 2048,
    "REPLY_FRIEND_APPLY": 2049,
    "GET_FRIEND_LIST": 2050,
    "DELETE_FRIEND": 2051,
    "PROFILE_BATCH_GET_INFO": 2052,
    "PROFILE_SEARCH_INFO": 2053,
    "MARK_MSG_UNREAD_COUNT_REPORT": 2054,
    "MARK_MSG_GET_UNREAD_COUNT": 2055,
    "BATCH_UNMARK_MESSAGE": 2056,
    "CLIENT_BATCH_ACK": 2057,
    "JOIN_VOIP": 2058,
    "GET_MEDIA_UPLOAD_CONFIG": 2059,
    "GET_MEDIA_STATUS": 2060,
    "GLOBAL_MESSAGE_SEARCH": 2100,
    "GLOBAL_GROUP_SEARCH": 2101,
    "CONVERSATION_MESSAGE_SEARCH": 2102,
    "CONVERSATION_MESSAGE_PRE_VIEW": 2103,
    "GET_MESSAGES": 2200,
    "VCD_CLEAN": 9999
  },
  "StatusCode": {
    "OK": 0,
    "DEPRECATED_INVALID_TOKEN": 1,
    "EXPIRED_TOKEN": 100,
    "INVALID_TICKET": 2,
    "CONVERSATION_NOT_FOUND": 3,
    "INVALID_REQUEST": 4,
    "INVALID_CMD": 5,
    "SERVER_ERR": 6,
    "USER_FORBIDDEN": 11,
    "DEVICE_NOT_BIND": 7,
    "MESSAGE_ILLEGAL": 8,
    "USER_ILLEGAL": 9,
    "USER_NOT_FRIENDS": 10,
    "USER_SILENCE": 12,
    "USER_NOT_IN_GROUP": 13,
    "USER_BANNED_TO_POST": 14,
    "INTERNAL_ERROR": 500,
    "MESSAGE_TARGET_CONVERSATION_NOT_EXIST": 15,
    "DEGRADATION_ERROR": 16,
    "RECALL_TIMEOUT": 17,
    "TOUCH_LIMIT": 18,
    "CALLBACK_DENY": 19,
    "CONV_NOT_FOUND": 100017,
    "INVALID_TOKEN": 200005
  },
  "VoipStatusCode": {
    "SUCCESS": 0,
    "VOIP_PARAMS_ERROR": 4,
    "VOIP_STATUS_ERROR": 18,
    "VOIP_CANCEL_ERROR": 19,
    "VOIP_OTHER_RESPONSE_ERROR": 20,
    "VOIP_CALLBACK_ERROR": 21
  },
  "SendMessageStatus": {
    "SEND_SUCCEED": 0,
    "USER_NOT_IN_CONVERSATION": 1,
    "CHECK_CONV_NOT_PASS": 2,
    "CHECK_MSG_NOT_PASS": 3,
    "CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE": 4,
    "USER_HAS_BEEN_BLOCKED": 5
  },
  "ConversationOperationStatus": {
    "OP_SUCCEED": 0,
    "REJECTED": 1,
    "PARTLY_REJECTED": 2,
    "APPLY_REJECTED": 3,
    "APPLY_SUCCEED": 4,
    "CALLBACK_REJECTED": 5,
    "TOUCH_LIMITS": 6
  },
  "Refer": {
    "REFER_NOT_USED": 0,
    "ANDROID": 1,
    "IOS": 2,
    "PC": 3,
    "SERVER": 4
  },
  "ConversationType": {
    "ONE_TO_ONE_CHAT": 1,
    "GROUP_CHAT": 2,
    "LIVE_CHAT": 3,
    "BROADCAST_CHAT": 4
  },
  "BlockType": {
    "MEMBER": 1,
    "CONVERSATION_NOT_MANAGERS": 2,
    "CONVERSATION_ALL": 3
  },
  "MessageType": {
    "MESSAGE_TYPE_NOT_USED": 0,
    "LEGACY_MESSAGE_TYPE_SYSTEM": 1,
    "LEGACY_MESSAGE_TYPE_EMOJI": 5,
    "LEGACY_MESSAGE_TYPE_TEXT": 7,
    "LEGACY_MESSAGE_TYPE_USER_CARD": 8,
    "MsgTypeShareSubOnlyVideo": 11,
    "MsgTypeHelloSticker": 15,
    "MsgTypeForwardComment": 16,
    "MsgTypeShareChallenge": 19,
    "MsgTypeShareLiveMsg": 21,
    "MsgTypeShareVideoBGM": 22,
    "MsgTypeShareProfile": 25,
    "MsgTypeH5Card": 26,
    "MsgTypeShareQnA": 33,
    "MsgTypeShareComment": 40,
    "MsgTypeShareProduct": 43,
    "MsgTypeShareMixVideo": 71,
    "MsgTypeShareEffect": 72,
    "MsgTypeFile": 101,
    "MsgTypeSystemNotice": 1006,
    "MsgTypeStrongSystemNotice": 1007,
    "MsgTypeShareLive": 1021,
    "MsgTypeShareStory": 1025,
    "MsgTypeGroupWelcomeAvatar": 1030,
    "MsgTypeGroupNotice": 1031,
    "MsgTypeSystemCardMsg": 1032,
    "MsgTypeShareGroupInvite": 1033,
    "MsgTypeShareLiveEvent": 1034,
    "MsgTypeSharedSearch": 1036,
    "MsgTypeSmallSystemCardMsg": 1037,
    "MsgTypeShareSubscribeInvite": 1038,
    "MsgTypeTemplateImageCard": 1801,
    "MsgTypeTemplatePictureCard": 1802,
    "MsgTypeTemplateVideoCard": 1803,
    "MsgTypeTemplateInfoCard": 1804,
    "MsgTypeTemplateStickerCard": 1805,
    "MsgTypeTemplatePortraitCard": 1806,
    "MsgTypeTemplateBotAnswerCard": 1807,
    "MsgTypeTemplateInteractiveNoticeCard": 1808,
    "MsgTypeTemplateShareVideo": 1809,
    "MsgTypeTemplateBubbleCard": 1810,
    "MsgTypeTemplateShareCommentCard": 1811,
    "MsgTypeTemplateAIGroupShotCard": 1812,
    "MsgTypeTemplateAudioCard": 1813,
    "MsgTypeTemplateInteractionCard": 1814,
    "MsgTypeTemplateCommonCard": 1900,
    "MsgTypeTemplateDynamicCard": 2000,
    "MsgTypeTemplatePlaylistImageCard": 3001,
    "LEGACY_MESSAGE_TYPE_IMAGE": 2,
    "LEGACY_MESSAGE_TYPE_AUDIO": 3,
    "LEGACY_MESSAGE_TYPE_VIDEO": 4,
    "LEGACY_MESSAGE_TYPE_FILE": 6,
    "LEGACY_MESSAGE_TYPE_TOAST": 9,
    "LEGACY_MESSAGE_TYPE_GROUP_CARD": 10,
    "LEGACY_MESSAGE_TYPE_SHARE_PLAYLIST": 81,
    "MESSAGE_TYPE_TEXT": 10001,
    "MESSAGE_TYPE_STICKER": 10002,
    "MESSAGE_TYPE_IMAGE": 10003,
    "MESSAGE_TYPE_VIDEO": 10004,
    "MESSAGE_TYPE_FILE": 10005,
    "MESSAGE_TYPE_AUDIO": 10006,
    "MESSAGE_TYPE_LOCATION": 10007,
    "MESSAGE_TYPE_SYSTEM": 10008,
    "MESSAGE_TYPE_LINK": 10009,
    "MESSAGE_TYPE_GSDK_AUDIO": 10011,
    "MESSAGE_TYPE_STATUS": 50000,
    "MESSAGE_TYPE_COMMAND": 50001,
    "MESSAGE_TYPE_UPDATE_MESSAGE_EXT": 50002,
    "MESSAGE_TYPE_CONVERSATION_DESTROY": 50005,
    "MESSAGE_TYPE_MODE_CHANGE": 50010,
    "MESSAGE_TYPE_READ_COMMAND": 50013,
    "MESSAGE_TYPE_REFRESH_MESSAGE": 50020,
    "MESSAGE_TYPE_RECALL_MESSAGE": 50021,
    "MESSAGE_TYPE_HIDE_VIOLATIVE_MESSAGE": 50022,
    "MESSAGE_TYPE_RE_FETCH_MESSAGE": 50023,
    "MESSAGE_TYPE_RESET_ALL_MESSAGES": 50024,
    "MESSAGE_TYPE_UPDATE_MESSAGE_PROPERTY": 70002,
    "MESSAGE_TYPE_UPDATE_MIN_INDEX": 50003,
    "MESSAGE_TYPE_USER_ACTION": 50004,
    "MESSAGE_TYPE_BLOCK_COMMAND": 50011,
    "MESSAGE_TYPE_MARK_COMMAND": 50012,
    "MESSAGE_TYPE_SEND_FAILED_RESP": 50014,
    "MESSAGE_TYPE_NOTIFY_STRANGER": 50015,
    "MESSAGE_TYPE_BATCH_UNMARK_COMMAND": 50016,
    "MESSAGE_TYPE_VISIBLE_MESSAGE_COMMAND": 50017,
    "MESSAGE_TYPE_NOTIFY_COMMAND": 60001,
    "MESSAGE_TYPE_MESSAGE_PROPERTY": 70001,
    "MESSAGE_TYPE_VOIP_COMMAND": 80001,
    "MESSAGE_TYPE_VOIP_CARD_COMMAND": 80002,
    "MESSAGE_TYPE_VOIP_SINGLE_CHAT_STATUS_COMMAND": 80003,
    "MESSAGE_TYPE_VOIP_CALLEE_LIST_UPDATE_NOTIFY": 80004,
    "MESSAGE_TYPE_VOIP_ROOM_DISMISS_NOTIFY": 80005,
    "MESSAGE_TYPE_CONVERSATION_APPLY_NOTIFY": 90001,
    "MESSAGE_TYPE_CONVERSATION_AUDIT_ACK_NOTIFY": 90002,
    "MsgTypeStreakCommandMessage": 100001,
    "MsgTypeStreakPetCommandMessage": 100002,
    "MsgTypeB2CActionBarRefresh": 100003
  },
  "CommandType": {
    "CmdTypeUnknown": 0,
    "CmdTypeMarkConversationRead": 1,
    "CmdTypeDeleteMessage": 2,
    "CmdTypeDeleteConversation": 3,
    "CmdTypeUpdateConvSetting": 4,
    "CmdTypeUpdateConvCoreInfo": 6,
    "CmdTypeUpdateConvParticipant": 7,
    "CmdTypeFirstMessage": 8,
    "CmdTypeTriggerConvPull": 100
  },
  "StatusMessageType": {
    "NotUsed": 0,
    "MarkConversationRead": 1,
    "DeleteMessage": 2,
    "DeleteConversation": 3,
    "UpdateConversationSetting": 4,
    "UpdateConversationCoreInfo": 5,
    "UpdateConversationParticipant": 6,
    "UpdateMessageExt": 7,
    "DissolveConversation": 8,
    "ModeChange": 9,
    "RefreshMessage": 10,
    "RecallMessage": 11,
    "HideViolativeMessage": 12,
    "ReFetchMessage": 13,
    "UpdateMessageProperty": 14,
    "RefreshAllMessage": 15,
    "FirstMessage": 16,
    "MultiPushModeChange": 17
  },
  "RefreshAllMessagesResetType": {
    "ResetTypeUnknown": 0,
    "ResetTypeColdStart": 1,
    "ResetTypeAtOnce": 2
  },
  "MarkReadMessageType": {
    "TYPE_USER_MESSAGE": 0,
    "TYPE_REACTION": 1
  },
  "BizStatusMessageType": {
    "NotUsed": 0,
    "Streak": 2000,
    "StreakPet": 2001,
    "B2CActionBarRefresh": 2002,
    "StickerCreationResult": 2003
  },
  "GroupRole": {
    "ORDINARY": 0,
    "OWNER": 1,
    "MANAGER": 2,
    "VISITOR": 3,
    "SYSTEM": 4
  },
  "GroupAuth": {
    "UPDATE_GROUP_NAME": 0,
    "RECALL_ORDINARY_MESSAGE": 1,
    "RECALL_MANAGER_MESSAGE": 2,
    "ADD_PARTICIPANT": 3,
    "REMOVE_PARTICIPANT": 4,
    "SET_MANAGER": 5,
    "DISSOLVE_GROUP": 6,
    "PUBLISH_NOTICE": 7,
    "BLOCKS_ORDINARY": 8,
    "BLOCKS_MANAGER": 9,
    "BLOCKS_CONVERSATION": 10,
    "UPDATE_GROUP_AUDIT": 11,
    "ACK_CONVERSATION_AUDIT": 12,
    "UPDATE_RANK_LIST": 13,
    "CAN_SEND_MESSAGE": 20,
    "ACCEPT_MESSAGE": 21
  },
  "TicketType": {
    "TICKET_TYPE_APP": 1,
    "TICKET_TYPE_PC": 2,
    "TICKET_TYPE_WEB": 3
  },
  "RetentionStatus": {
    "NOT_STARTED": 0,
    "IN_PROGRESS": 1,
    "DONE": 2,
    "FAILED": 3
  },
  "ParticipantRole": {
    "PARTICIPANT_ROLE_NORMAL": 0,
    "PARTICIPANT_ROLE_OWNER": 1,
    "PARTICIPANT_ROLE_ADMIN": 2,
    "PARTICIPANT_ROLE_VISITOR": 3
  },
  "InitType": {
    "TYPE_BY_CONVERSATION": 1,
    "TYPE_BY_USER": 2,
    "TYPE_BY_RANK": 3
  },
  "MessageDirection": {
    "OLDER": 1,
    "NEWER": 2,
    "FROM_LATEST": 3,
    "FROM_OLD_TO_NEW": 4,
    "FROM_NEW_TO_OLD": 5
  },
  "ConversationListDirection": {
    "CONVERSATION_DESC": 0,
    "CONVERSATION_ASC": 1
  },
  "UserActionType": {
    "ENTER_CONVERSATION": 1,
    "EXIT_CONVERSATION": 2
  },
  "InputStatus": {
    "TYPING": 3,
    "CLEAR_INPUT": 4
  },
  "BlockStatus": {
    "UNBLOCK": 0,
    "BLOCK": 1
  },
  "ActionType": {
    "UNKNOWN_ACTION": 0,
    "FAVORITE": 1,
    "PIN": 2,
    "UNREAD": 3
  },
  "SendType": {
    "BY_CONVERSATION": 0,
    "BY_USER": 1
  },
  "NewMessageNotifyType": {
    "PER_USER": 1,
    "PER_CONVERSATION": 2
  },
  "MsgTraceMetrics": {
    "GATEWAY": 0,
    "BEFORE_CALLBACK": 1,
    "AFTER_CALLBACK": 2,
    "BEFORE_CONVERSATION_KAFKA": 3,
    "AFTER_CONVERSATION_KAFKA": 4,
    "BEFORE_USER_KAFKA": 5,
    "AFTER_USER_KAFKA": 6,
    "PUSH": 7
  },
  "MsgTracePath": {
    "FROM_UNKNOWN": 0,
    "FROM_FRONTIER": 1,
    "FROM_HTTP": 2,
    "FROM_SERVER": 3
  },
  "MuteMessageType": {
    "TYPE_MENTION": 1,
    "TYPE_SEND_BY_GROUP_OWNER": 2,
    "TYPE_AUTO_SEND_BY_SERVER": 3,
    "TYPE_MENTION_AND_SEND_BY_GROUP_OWNER": 4
  },
  "FriendMessageType": {
    "SendApply": 1,
    "DeleteFriend": 2,
    "AddFriend": 3
  },
  "PreviewOperationStatus": {
    "PREVIEW_OP_SUCCEED": 0,
    "PREVIEW_OP_PREVIEW_STATUS_NOT_OPEN": 1,
    "PREVIEW_OP_CALLBACK_NOT_PASS": 2,
    "PREVIEW_OP_CONVERSATION_NOT_FOUND": 3
  },
  "MessagePropertyType": {
    "REACTION": 0,
    "SYNC": 1
  },
  "ReactionStatus": {
    "POSITIVE": 0,
    "NEGATIVE": 1
  },
  "SyncStatus": {
    "S_SEND": 0,
    "S_NOTIFY": 1,
    "S_PULL": 2,
    "S_READ": 3,
    "R_CLICK": 4
  },
  "OPERATION_TYPE": {
    "ADD_PROPERTY_ITEM": 0,
    "REMOVE_PROPERTY_ITEM": 1,
    "SET_PROPERTY": 2,
    "DEL_PROPERTY": 3,
    "XSET_PROPERTY": 4,
    "MODIFY_PROPERTY": 5
  },
  "ModifyMessagePropertyStatus": {
    "MODIFY_PROPERTY_SUCCESS": 0,
    "MODIFY_PROPERTY_REPEAT_REQUEST": 1,
    "MODIFY_PROPERTY_INVALID_LENGTH": 2,
    "MODIFY_PROPERTY_INVALID_REQUEST": 3,
    "MODIFY_PROPERTY_CALLBACK_ERROR": 4,
    "MODIFY_PROPERTY_INTERNAL_ERROR": 500
  },
  "MediaType": {
    "IMG": 1,
    "VIDEO": 2,
    "AUDIO": 3,
    "FILE": 4,
    "OTHER": 10
  },
  "MediaTokenType": {
    "VSDK": 1,
    "IMAGEX": 2,
    "VSDK_V5": 3,
    "IMAGEX_V5": 4
  },
  "ReadURLFrom": {
    "URL_VSDK": 1,
    "URL_IMAGEX": 2
  },
  "SortType": {
    "JOIN_TIME": 1,
    "CREATED_TIME": 2,
    "GROUP_NAME": 3,
    "ACTIVE_TIME": 4
  },
  "NetworkType": {
    "UNKNOWN": 0,
    "WIFI": 1,
    "MOBILE_2G": 2,
    "MOBILE_3G": 3,
    "MOBILE_4G": 4,
    "MOBILE_5G": 5
  },
  "MsgReportType": {
    "NOT_USE": 0,
    "MSG_RECEIVE_BY_WS": 1,
    "MSG_RECEIVE_BY_USER": 2,
    "MSG_RECEIVE_BY_INIT": 3,
    "MSG_RECEIVE_BY_LOAD_HISTORY": 4,
    "MSG_RECEIVE_BY_LOAD_NEWER": 5,
    "MSG_RECEIVE_BY_CHECK_MSG_V1": 6,
    "MSG_RECEIVE_BY_CHECK_MSG_V2": 7,
    "MSG_RECEIVE_BY_STRANGER": 8,
    "MSG_SHOW": 9
  },
  "VoipStatus": {
    "IDLE": 0,
    "CALLING": 1,
    "RINGING": 2,
    "ACCEPTED": 3,
    "ONTHECALL": 4,
    "TERMINATED": 101,
    "OCCUPIED": 102,
    "REFUSED": 103,
    "CANCELLED": 104,
    "UNAVAILABLE": 105,
    "RTCERROR": 106,
    "RTC_ENGINE_MISMATCH": 107
  },
  "VoipType": {
    "VOIP_TYPE_NOT_USED": 0,
    "VOIP_TYPE_ALL": 1,
    "VOIP_TYPE_VIDEOONLY": 2,
    "VOIP_TYPE_AUDIOONLY": 3
  },
  "VoipMode": {
    "VOIP_MODE_DOUBLE": 0,
    "VOIP_MODE_MULTIPLAYER": 1
  },
  "ChannelStatus": {
    "CHANNEL_STATUS_NOT_USED": 0,
    "ONLINE": 1,
    "OFFLINE": 2
  },
  "ClientMetricType": {
    "COUNTER": 0,
    "TIMER": 1
  },
  "ApplyErrorCode": {
    "APPLY_SUCCESS": 0,
    "UPDATE_STATUS_ERR": 1,
    "CALLBACK_NOT_PASS": 2,
    "APPLY_NOT_EXIST": 3,
    "APPLY_PARAMS_ERR": 4,
    "CONV_SWITCH_CLOSED": 5,
    "USER_NO_PERMISSION": 6,
    "USER_ALREADY_IN_GROUP": 7,
    "CALLBACK_NO_NEED_AUDIT": 8,
    "APPLY_CONVERSATION_NOT_FOUND": 9,
    "CONVERSATION_IS_FULL": 10,
    "APPLY_INTERNAL_ERR": 500
  },
  "ApplyStatusCode": {
    "APPLYING": 1,
    "AGREE": 2,
    "DENY": 3,
    "INVALID": 4
  },
  "MessageStatus": {
    "AVAILABLE": 0,
    "NOT_EXIST": 1,
    "INVISIBLE": 2,
    "RECALLED": 3,
    "DELETED": 4
  },
  "FriendErrorCode": {
    "FRIEND_SUCCESS": 0,
    "FRIEND_DUPLICATE_APPLY": 1,
    "FRIEND_SEND_APPLY_LIMIT": 2,
    "FRIEND_RECEIVE_APPLY_LIMIT": 3,
    "FRIEND_ALREADY_FRIEND": 4,
    "FRIEND_INTERNAL_ERR": 500
  },
  "AuthType": {
    "UNKNOWN_AUTH": 0,
    "SESSION_AUTH": 1,
    "TOKEN_AUTH": 2,
    "SUBSTITUTE_AUTH": 3
  },
  "TokenType": {
    "DEFAULT_TOKEN": 0,
    "APP_TOKEN": 1,
    "SERVER_TOKEN": 2
  },
  "ConversationsListPolicy": {
    "ALL": 1,
    "HOT": 2
  },
  "PushType": {
    "Internal": 1,
    "External": 2
  },
  "DirectPushStatus": {
    "Success": 1,
    "AsyncSuccess": 2,
    "Fail": 3,
    "Offline": 4
  },
  "ConvRankUpdateRule": {
    "IgnoreSenderRankUpdate": 1,
    "IgnoreReceiverRankUpdate": 2,
    "IgnoreAllRankUpdate": 3
  },
  "InboxPageCategory": {
    "NormalUserInbox": 1,
    "StrangerMessageRequest": 2,
    "StrangerFilteredRequest": 3
  },
  "FilterReason": {
    "FilteredReasonRisk": 1,
    "FilteredRequestKeyword": 2
  },
  "PullScene": {
    "PULL_SCENE_UNKNOWN": 0,
    "PULL_SCENE_WS_REC": 1,
    "PULL_SCENE_INIT": 2,
    "PULL_SCENE_FOREGROUND": 3,
    "PULL_SCENE_CURSOR": 4,
    "PULL_SCENE_HAS_MORE": 5,
    "PULL_SCENE_TOKEN": 6,
    "PULL_SCENE_STRANGER": 7,
    "PULL_SCENE_POLLING": 8,
    "PULL_SCENE_MANUAL": 9
  },
  "CursorType": {
    "CURSOR_TYPE_USER_MSG_CHAIN": 0,
    "CURSOR_TYPE_RECENT_CONV_CHAIN": 1,
    "CURSOR_TYPE_STATUS_MSG_CHAIN": 2
  },
  "IconType": {
    "Default": 0,
    "ServerError": 1,
    "Moderation": 2,
    "Loading": 3
  },
  "VideoType": {
    "Video": 0,
    "Live": 1
  },
  "LinkType": {
    "DeepLink": 0,
    "H5Link": 1,
    "FollowUser": 2,
    "Callback": 3,
    "Show": 4,
    "Refresh": 5
  },
  "IMUploadScene": {
    "MultimediaMessaging": 1,
    "StickerCreation": 2,
    "PublicMultimediaMessaging": 3
  },
  "FallbackStatus": {
    "UNKNOWN": 0,
    "UNAVAILABLE": 1,
    "STORY_EXPIRED": 2,
    "FRIENDS_ONLY": 3
  },
  "Position": {
    "top": 0,
    "middle": 1,
    "bottom": 2
  },
  "ButtonType": {
    "DEFAULT": 1,
    "CLICKABLE_TEXT": 2
  },
  "UiLocationType": {
    "MessageNormal": 10001,
    "MessageCenter": 10002,
    "BannerTop": 20001,
    "BannerBottom": 20002,
    "PopupTop": 30001,
    "PopupBottom": 30002
  },
  "AttachmentType": {
    "ATTACHMENT_TYPE_DEFAULT": 0,
    "ATTACHMENT_TYPE_STORY": 1,
    "ATTACHMENT_TYPE_NUDGE_LIKE": 2,
    "ATTACHMENT_TYPE_NUDGE_FAVOURITE": 3,
    "ATTACHMENT_TYPE_NUDGE_REPOST": 4,
    "ATTACHMENT_TYPE_SHARE_COMMENT_MENTION": 5,
    "ATTACHMENT_TYPE_REPLY_REPOST": 6
  },
  "ConversationGroupPushType": {
    "Unknown": 0,
    "GroupAddConversation": 1,
    "GroupDeleteConversation": 2,
    "GroupConversationNewMsg": 3,
    "GroupConversationCoreInfoUpdate": 4,
    "GroupConversationParticipantsUpdate": 5
  },
  "StreakCommandType": {
    "StreakCmdUnknown": 0,
    "StreakCmdStart": 1,
    "StreakCmdEnd": 2,
    "StreakCmdUpdate": 3,
    "StreakCmdRemind": 4
  },
  "StreakActionType": {
    "StreakActionUnkown": 0,
    "LightMilestoneStreak": 1
  }
} as const;
