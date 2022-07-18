import http from "./httpServices";
import getApis from "./api";

import { getAccessToken } from "../redux/user/token.action";

export const getAllShopGoods = () => {
  return http.get(getApis.listShopItems);
};

export const getSearchedShopGoods = (searchField) => {
  return http.get(getApis.listShopItems + "?search=" + searchField);
};

export const getSortedShopGoods = (sortKey) => {
  return http.get(getApis.listShopItems + "?ordering=" + sortKey);
};

export const buyShopGood = (shopItemId) => {
  const accessToken = getAccessToken();

  return http.post(getApis.buyShopItems + shopItemId, null, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
