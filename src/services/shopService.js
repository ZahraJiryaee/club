import http from "./httpServices";
import getApis from "./api";

export const getAllShopGoods = () => {
  return http.get(getApis.listShopItems);
};

export const getSearchedShopGoods = (searchField) => {
  return http.get(getApis.listShopItems + "?search=" + searchField);
};

export const getSortedShopGoods = (sortKey) => {
  return http.get(getApis.listShopItems + "?ordering=" + sortKey);
};
