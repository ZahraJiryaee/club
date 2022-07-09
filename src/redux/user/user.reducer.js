import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  accessToken: null,
  refreshToken: null,
  currentUser: null,
  openValidationDialog: false,
  allUserAddresses: {},
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
    case UserActionTypes.SET_OPEN_VALIDATION_DIALOG:
      return {
        ...state,
        openValidationDialog: action.payload,
      };
    case UserActionTypes.SET_ALL_USER_ADDRESSES:
      return {
        ...state,
        allUserAddresses: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
