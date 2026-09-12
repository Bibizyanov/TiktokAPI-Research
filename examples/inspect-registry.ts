import {
  getApiByCmd,
  getApiBySymbol,
  TIKTOK_IM_API,
} from "../src/index.js";

console.log(getApiByCmd(100));
console.log(getApiBySymbol("GET_MESSAGES_BY_CONVERSATION"));

console.table(
  TIKTOK_IM_API
    .filter((entry) => entry.route)
    .map((entry) => ({
      cmd: entry.cmd,
      symbol: entry.symbol,
      route: entry.route,
    })),
);
