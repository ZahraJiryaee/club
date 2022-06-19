import { WheelActionTypes } from "./wheel.types";

const INITIAL_STATE = {
  bonusList: [],
  bonus: null,
  openWheelModal: false,
  isWantMorreChanceModalOpen: false,
};

const wheelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WheelActionTypes.SET_BONUS_LIST:
      return {
        ...state,
        bonusList: action.payload,
      };
    case WheelActionTypes.SET_BONUS:
      return {
        ...state,
        bonus: action.payload,
      };
    case WheelActionTypes.OPEN_WHEEL_MODAL:
      return {
        ...state,
        openWheelModal: action.payload,
      };
    case WheelActionTypes.IS_WANT_MORE_CHANCE_MODAL_OPEN:
      return {
        ...state,
        isWantMorreChanceModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default wheelReducer;
