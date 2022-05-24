import { combineReducers } from "redux";
import headerReducer from "./header/header.reducer";
import userReducer from "./user/user.reducer";
import gamesReducer from "./games/games.reducer";
import genresReducer from "./genres/genres.reducer";
import wheelReducer from "./wheel/wheel.reducer";
import leaderboardReducer from "./leaderboard/leaderboard.reducer";
import shopReducer from "./shop/shop.reducer";

export const rootReducer = combineReducers({
  header: headerReducer,
  user: userReducer,
  games: gamesReducer,
  genres: genresReducer,
  wheel: wheelReducer,
  leaderboard: leaderboardReducer,
  shop: shopReducer,
});
