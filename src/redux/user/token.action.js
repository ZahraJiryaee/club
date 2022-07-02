import { UserActionTypes } from "./user.types";

import { store } from "./../store";

export const SetTokens = (tokenObj) => (dispatch) => {
  console.log("tokenObj::", tokenObj);
  dispatch({
    type: UserActionTypes.SET_ACCESS_TOKEN,
    payload: tokenObj.accessToken,
  });
  dispatch({
    type: UserActionTypes.SET_REFRESH_TOKEN,
    payload: tokenObj.refreshToken,
  });
};

export const clearTokens = () => (dispatch) => {
  dispatch({
    type: UserActionTypes.SET_ACCESS_TOKEN,
    payload: "",
  });
  dispatch({
    type: UserActionTypes.SET_REFRESH_TOKEN,
    payload: "",
  });
};

export const getAccessToken = () => {
  const currentValue = store.getState();
  return currentValue.user.accessToken;
};

export const getRefreshToken = () => {
  const currentValue = store.getState();
  return currentValue.user.refreshToken;
};
