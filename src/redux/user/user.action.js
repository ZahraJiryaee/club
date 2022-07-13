import i18n from "i18next";

import { clearTokens, SetTokens } from "./token.action";

import { UserActionTypes } from "./user.types";

import {
  sendPhoneNumber,
  checkOTP,
  setLoginToken,
  getUserProfile,
  setUserProfile,
  setInviterNumber,
  setDeviceId,
  setBonusAddress,
} from "../../services/userServices";
import logger from "../../services/logService";
import { toastError } from "./../../services/toastService";

export const signUp_Phase1 = (phoneNumber) => async (dispatch) => {
  let result;
  dispatch(clearTokens());
  await sendPhoneNumber(phoneNumber)
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        logger.logInfo("signUp_Phase1-response::", response);
      }
    })
    .catch((e) => {
      result = e;
      logger.logError("signUp_Phase1-error::", e.response);
      if (e.response.status === 409) {
        toastError(i18n.t("User_Already_Exist"));
      } else {
        toastError(i18n.t("Try_Again"));
      }
    });
  return result;
};

export const signUp_Phase2 = (body) => async (dispatch) => {
  let result;
  const { inviter_number, mobile_number, password } = body;
  await checkOTP(body)
    .then(async (response) => {
      if (response.status === 200 || response.status === 201) {
        result = "success";
        logger.logInfo("signUp_Phase2-response::", response);

        result = await dispatch(login(mobile_number, password));

        if (inviter_number) {
          await dispatch(inviteFriends(inviter_number));
        }
        dispatch(setOpenValidationDialog(false));
      }
    })
    .catch((e) => {
      result = e.response.data.message;
      logger.logError("signUp_Phase2-error::", e.response);

      if (e.response.status === 422) {
        toastError(i18n.t("Otp_Not_Valid"));
      } else {
        toastError(i18n.t("Try_Again"));
      }
    });
  return result;
};

export const login = (username, password) => async (dispatch) => {
  let result;
  await setLoginToken(username, password)
    .then(async (response) => {
      if (response.status === 200) {
        logger.logInfo("login-response::", response);

        const { access: accessToken, refresh: refreshToken } = response.data;
        dispatch(SetTokens({ accessToken, refreshToken }));

        dispatch(setOpenValidationDialog(false));

        result = await dispatch(setCurrentUser());
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      result = e.response.data.message;
      logger.logError("login-error::", e);
    });
  return result;
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  window.location = "/";

  dispatch({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: null,
  });

  dispatch(clearTokens());
};

export const editUserProfileInformation = (body) => async (dispatch) => {
  let result;
  await setUserProfile(body)
    .then(async (response) => {
      logger.logInfo("response-editUserProfileInformation", response);
      if (response.status === 200) {
        result = await dispatch(setCurrentUser());
      }
    })
    .catch((error) => {
      toastError(i18n.t("InviteFriends_Error_Message"));
      logger.logError("error-editUserProfileInformation", error);
      result = error.response;
    });

  return result;
};

export const setCurrentUser = () => async (dispatch) => {
  let result;
  await getUserProfile()
    .then((response) => {
      logger.logInfo("response-setCurrentUser", response);
      if (response.status === 200) {
        dispatch({
          type: UserActionTypes.SET_CURRENT_USER,
          payload: response.data,
        });
        result = response;
      }
      //success toast-> welcome to club
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      logger.logError("error-setCurrentUser", e);
      dispatch({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: null,
      });
      result = e.response;
    });
  return result;
};

export const setUserBonusAddress = (bonusLogId, body) => async (dispatch) => {
  let result;
  await setBonusAddress(bonusLogId, body)
    .then((response) => {
      logger.logInfo("response-setBonusAddress", response);
      if (response.status === 200) {
        result = response;
      }
    })
    .catch((error) => {
      logger.logError("error-setBonusAddress", error);
      result = error.response;
    });
  return result;
};

export const inviteFriends = (inviter_number) => async () => {
  const accessToken = localStorage.getItem("accessToken");
  await setInviterNumber(inviter_number, accessToken)
    .then((response) => {
      logger.logInfo("response-invite-friends", response);
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      logger.logError("error-invite-friends", e);
      toastError(i18n.t("InviteFriends_Error_Message"));
    });
};

export const LinkDeviceID = (deviceID) => async () => {
  const accessToken = localStorage.getItem("accessToken");
  await setDeviceId(deviceID, accessToken)
    .then((response) => {
      logger.logInfo("response-link-device-id", response);
    })
    .catch((e) => {
      //error toast-> e.response.data.message
    });
};

export const setOpenValidationDialog = (value) => ({
  type: UserActionTypes.SET_OPEN_VALIDATION_DIALOG,
  payload: value,
});

export const setIsLoading = (value) => ({
  type: UserActionTypes.SET_IS_LOADING,
  payload: value,
});
