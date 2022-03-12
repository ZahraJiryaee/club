import { GamesActionTypes } from "./games.types";

const INITIAL_STATE = {
  allGames: [],
  filteredCategory: [],
  searchedItem: [],
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesActionTypes.GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
      };
    case GamesActionTypes.GET_FILTERED_CATEGORY:
      return {
        ...state,
        filteredCategory: action.payload,
      };
    case GamesActionTypes.GET_SEARCHED_ITEM:
      return {
        ...state,
        searchedItem: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
