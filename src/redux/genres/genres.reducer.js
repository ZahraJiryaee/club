import { GenresActionTypes } from "./genres.types";

const INITIAL_STATE = {
  allGenres: [],
  filteredGenre: [],
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GenresActionTypes.GET_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    case GenresActionTypes.GET_FILTERED_GENRE:
      return {
        ...state,
        filteredGenre: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
