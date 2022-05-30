import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import headerReducer from "./header/header.reducer";
import userReducer from "./user/user.reducer";
import gamesReducer from "./games/games.reducer";
import genresReducer from "./genres/genres.reducer";
import wheelReducer from "./wheel/wheel.reducer";
import leaderboardReducer from "./leaderboard/leaderboard.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["header", "games", "genres", "shop"],
  //containing any reducer that we wanna store
};

const rootReducer = combineReducers({
  header: headerReducer,
  user: userReducer,
  games: gamesReducer,
  genres: genresReducer,
  wheel: wheelReducer,
  leaderboard: leaderboardReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
