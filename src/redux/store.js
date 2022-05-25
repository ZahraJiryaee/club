import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { getAllGames } from "./games/games.action";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [thunk, logger];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

//Initialize
// store.dispatch(getAllGames());
// store.dispatch(getAllGenres());
