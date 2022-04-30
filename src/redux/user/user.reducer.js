import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  accessToken: null,
  refreshToken: null,
  currentUser: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case UserActionTypes.SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
