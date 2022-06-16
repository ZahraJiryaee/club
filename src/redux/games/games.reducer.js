import { GamesActionTypes } from "./games.types";

const INITIAL_STATE = {
  allGames: [],
  filteredCategory: [],
  searchedItem: [],
  gameDetails: [],
  userApplicationInfo: [],
  isApplicationInstalled: false,
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
    case GamesActionTypes.GET_GAME_DETAILS:
      return {
        ...state,
        gameDetails: action.payload,
      };
    case GamesActionTypes.GET_USER_APPLICATION_INFO:
      return {
        ...state,
        userApplicationInfo: action.payload,
      };
    case GamesActionTypes.IS_APPLICATION_INSTALLED:
      return {
        ...state,
        isApplicationInstalled: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
