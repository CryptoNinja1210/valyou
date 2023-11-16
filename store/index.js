import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  const arrMiddleware = [middleware];

  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...arrMiddleware));
  }
  return applyMiddleware(...arrMiddleware);
};

function configureStore() {
  const store = createStore(RootReducer, bindMiddleware(sagaMiddleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  };

  store.runSagaTask();

  return store;
}

export const wrapper = createWrapper(configureStore);
  

