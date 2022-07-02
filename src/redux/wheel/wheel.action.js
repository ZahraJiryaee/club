import i18n from "i18next";

import { WheelActionTypes } from "./wheel.types";

import {
  retrieveBonusList,
  setBonus,
  getBonusLog,
} from "./../../services/wheelService";
import logger from "../../services/logService";
import { toastError } from "./../../services/toastService";

export const getBonusList = () => async (dispatch) => {
  let result;
  await retrieveBonusList()
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        logger.logInfo("response-get-bonus-list:", response);
        dispatch({
          type: WheelActionTypes.SET_BONUS_LIST,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      //   result = e.response.data.message;
      logger.logInfo("error-get-bonus-list:", e);
    });
  return result;
};

export const setUserBonus = () => async (dispatch) => {
  let result;
  await setBonus()
    .then((response) => {
      if (response.status === 200) {
        result = response;
        logger.logInfo("response-set-bonus:", response);
        dispatch({
          type: WheelActionTypes.SET_BONUS,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      logger.logError("error-set-bonus:", e);
      logger.logError("error.response-set-bonus:", e.response);
      result = e.response;
      if (e.response.status === 403) {
        toastError(i18n.t("Try_Again"));
      }
      dispatch({
        type: WheelActionTypes.SET_BONUS,
        payload: null,
      });
    });
  return result;
};

export const getBonusHistory = () => async (dispatch) => {
  let result;
  await getBonusLog()
    .then((response) => {
      if (response.status === 200) {
        result = response;
        logger.logInfo("response-getBonusHistory:", response);
        dispatch({
          type: WheelActionTypes.GET_BONUS_LOG,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      logger.logError("error-getBonusHistory:", e);
      logger.logError("err.response-getBonusHistory:", e.response);
      result = e.response;
      dispatch({
        type: WheelActionTypes.GET_BONUS_LOG,
        payload: null,
      });
    });
  return result;
};

export const setOpenWheelModal = (value) => ({
  type: WheelActionTypes.OPEN_WHEEL_MODAL,
  payload: value,
});

export const setWantMoreChanceModaMode = (value) => ({
  type: WheelActionTypes.IS_WANT_MORE_CHANCE_MODAL_OPEN,
  payload: value,
});
