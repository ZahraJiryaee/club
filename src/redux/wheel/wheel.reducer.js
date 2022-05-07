import { WheelActionTypes } from "./wheel.types";

const INITIAL_STATE = {
  bonusList: [],
  bonus: null,
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
    default:
      return state;
  }
};

export default wheelReducer;
