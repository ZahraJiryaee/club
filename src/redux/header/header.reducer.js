import { HeaderActionTypes } from "./header.types";

const INITIAL_STATE = {
  headerMode: "",
};

//Header Modes//
// transparent
// simple
// games

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.GET_HEADER_MODE:
      return {
        ...state,
        headerMode: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
