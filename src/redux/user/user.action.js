import {
  sendPhoneNumber,
  checkOTP,
  setPassword,
  setToken,
} from "../../services/userServices";
import { UserActionTypes } from "./user.types";

export const signUp_Phase1 = (phoneNumber) => async () => {
  let result;
  await sendPhoneNumber(phoneNumber)
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        console.log("success");
      }
    })
    .catch((e) => {
      console.log(e.response.data.message);
      result = e.response.data.message;
    });
  return result;
};

export const signUp_Phase2 = (phoneNumber, otp) => async () => {
  let result;
  await checkOTP(phoneNumber, otp)
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        console.log("success");
      }
    })
    .catch((e) => {
      console.log(e.response.data.message);
      result = e.response.data.message;
    });
  return result;
};

export const signUp_Phase3 = (phoneNumber, password) => async () => {
  let result;
  await setPassword(password, phoneNumber)
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        console.log("success");
      }
    })
    .catch((e) => {
      console.log(e.response.data.message);
      result = e.response.data.message;
    });
  return result;
};

export const login = (username, password) => async (dispatch) => {
  let result;
  await setToken(username, password)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        dispatch({
          type: UserActionTypes.SET_ACCESS_TOKEN,
          payload: response.data.access,
        });
        dispatch({
          type: UserActionTypes.SET_REFRESH_TOKEN,
          payload: response.data.refresh,
        });
        result = "success";
        console.log("success");
      }
    })
    .catch((e) => {
      console.log(e.response.data.message);
      result = e.response.data.message;
    });
  return result;
};

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
