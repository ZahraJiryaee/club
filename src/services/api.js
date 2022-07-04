export const API_URL =
  process.env.REACT_APP_API_URL || "http://45.94.255.112:8080";

export const getAPIUrl = () => {
  return `${API_URL}`;
};

// login
const newTokenApiEndpoint = API_URL + "/api/v1/user/token/refresh";

// profile
const userProfileApiEndpoint = API_URL + "/api/v1/user/profile";

// bonus
const setBonusAddress = API_URL + "/api/v1/bonus/";
const getUserAddresses = API_URL + "/api/v1/user/address";

// leaderboard
const listUserWeekly = API_URL + "/api/v1/score/weakly";
const listUserMonthly = API_URL + "/api/v1/score/monthly";
const listUserSeasonal = API_URL + "/api/v1/score/seasonal";

// shop
const listShopItems = API_URL + "/api/v1/shop/goods";

// game
const getGamesApiEndpoint = API_URL + "/api/v1/application/";
const getFilteredCategoryApiEndpoint = API_URL + "/api/v1/application/filter";
const getUserApplicationInfoEndpoint = API_URL + "/api/v1/application/user/";
const isAppInstalledEndpoint = API_URL + "/api/v1/application/user/is_install/";

const getApis = {
  API_URL,
  newTokenApiEndpoint,
  userProfileApiEndpoint,
  setBonusAddress,
  getUserAddresses,
  listUserWeekly,
  listUserMonthly,
  listUserSeasonal,
  listShopItems,
  getGamesApiEndpoint,
  getFilteredCategoryApiEndpoint,
  getUserApplicationInfoEndpoint,
  isAppInstalledEndpoint,
};

export default getApis;
