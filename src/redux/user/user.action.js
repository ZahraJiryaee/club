import {
  sendPhoneNumber,
  checkOTP,
  setPassword,
  setLoginToken,
  getUserProfile,
  setInviterNumber,
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
  (phoneNumber, password, hasInviterCode, inviterCode) => async (dispatch) => {
    let result;
    await setPassword(password, phoneNumber)
      .then(async (response) => {
        if (response.status === 200 || response.status === 201) {
          //result = "success";
          result = await dispatch(login(phoneNumber, password));
          if (hasInviterCode) {
            await dispatch(inviteFriends(inviterCode));
          }
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

        result = await dispatch(setUserProfile(response.data.access));
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      result = e.response.data.message;
    });
  return result;
};

export const setUserProfile = (acccessToken) => async (dispatch) => {
  let result;
  await getUserProfile(acccessToken)
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
  return result;
};

export const inviteFriends = (inviterCode) => async () => {
  const accessToken = localStorage.getItem("accessToken");
  await setInviterNumber(inviterCode, accessToken)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      //error toast-> e.response.data.message
    });
};

export const setOpenValidationDialog = (value) => ({
  type: UserActionTypes.SET_OPEN_VALIDATION_DIALOG,
  payload: value,
});
