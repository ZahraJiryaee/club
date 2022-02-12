import { GamesActionTypes } from "./games.types";

const INITIAL_STATE = {
  allGames: [],
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesActionTypes.GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
