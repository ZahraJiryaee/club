import {
  sendPhoneNumber,
  checkOTP,
  setPassword,
  setLoginToken,
  getUserProfile,
} from "../../services/userServices";
import { UserActionTypes } from "./user.types";

export const signUp_Phase1 = (phoneNumber) => async () => {
  let result;
  await sendPhoneNumber(phoneNumber)
    .then((response) => {
      if (response.status === 200) {
        result = "success";
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
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
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      result = e.response.data.message;
    });
  return result;
};

export const signUp_Phase3 =
  (phoneNumber, password, hasInviterCode, inviterCode) => async () => {
    let result;
    await setPassword(password, phoneNumber)
      .then((response) => {
        if (response.status === 200) {
          result = "success";
          //login to get accesstoken
          //if we have inviter code -> inviter Code requset(2000 or not) THEN profile info
          //profile info(check signup response-if it contain use info delete this line )

          //user-info
          // dispatch({
          //   type: UserActionTypes.SET_CURRENT_USER,
          //   payload: response.data,
          // });
        }
      })
      .catch((e) => {
        //error toast-> e.response.data.message
        result = e.response.data.message;
      });
    return result;
  };

export const login = (username, password) => async (dispatch) => {
  let result;
  await setLoginToken(username, password)
    .then(async (response) => {
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
        await getUserProfile(response.data.access)
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: UserActionTypes.SET_CURRENT_USER,
                payload: response.data,
              });
              result = "success";
            }
            //success toast-> welcome to club
          })
          .catch((e) => {
            //error toast-> e.response.data.message
          });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      result = e.response.data.message;
    });
  return result;
};
