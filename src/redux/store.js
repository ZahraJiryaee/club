import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [logger];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), reduxDevTools)
);
