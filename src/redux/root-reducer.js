import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import gamesReducer from "./games/games.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
});
