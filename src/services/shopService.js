import http from "./httpServices";
import getApis from "./api";

export const getAllShopGoods = () => {
  return http.get(getApis.listShopItems);
};
