import { GenresActionTypes } from "./genres.types";

const INITIAL_STATE = {
  allGenres: [],
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GenresActionTypes.GET_ALL_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
