import http from "./httpServices";
import getApis from "./api";

export const userListWeekly = () => {
  return http.get(getApis.listUserWeekly);
};

export const userListMonthly = () => {
  return http.get(getApis.listUserMonthly);
};

export const userListSeasonal = () => {
  return http.get(getApis.listUserSeasonal);
};
