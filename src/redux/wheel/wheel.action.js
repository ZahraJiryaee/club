import { WheelActionTypes } from "./wheel.types";

import {
  retrieveBonusList,
  setBonus,
  getBonusLog,
} from "./../../services/wheelService";

export const getBonusList = () => async (dispatch) => {
  let result;
  await retrieveBonusList()
    .then((response) => {
      if (response.status === 200) {
        result = "success";
        console.log("response:", response);
        dispatch({
          type: WheelActionTypes.SET_BONUS_LIST,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      //   result = e.response.data.message;
      console.log("e:", e);
    });
  return result;
};

export const setUserBonus = () => async (dispatch) => {
  let result;
  await setBonus()
    .then((response) => {
      if (response.status === 200) {
        result = response;
        console.log("response-set-bonus:", response);
        dispatch({
          type: WheelActionTypes.SET_BONUS,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      console.log("e:", e, "-", e.response);
      result = e.response;
      if (e.response.status === 403) {
        error("دوباره تلاش کنید!");
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
        console.log("response-set-bonus:", response);
        dispatch({
          type: WheelActionTypes.GET_BONUS_LOG,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      //error toast-> e.response.data.message
      console.log("e:", e, "-", e.response);
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
