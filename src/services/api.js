export const API_URL =
  process.env.REACT_APP_API_URL || "http://45.94.255.112:8080";

export const getAPIUrl = () => {
  return `${API_URL}`;
};

// login
const newTokenApiEndpoint = API_URL + "/api/v1/user/token/refresh";

// profile
const userProfileApiEndpoint = API_URL + "/api/v1/user/profile";

// leaderboard
const listUserWeekly = API_URL + "/api/v1/score/weakly";
const listUserMonthly = API_URL + "/api/v1/score/monthly";
const listUserSeasonal = API_URL + "/api/v1/score/seasonal";

// shop
const listShopItems = API_URL + "/api/v1/shop/goods";

const getApis = {
  API_URL,
  newTokenApiEndpoint,
  userProfileApiEndpoint,
  listUserWeekly,
  listUserMonthly,
  listUserSeasonal,
  listShopItems,
};

export default getApis;
