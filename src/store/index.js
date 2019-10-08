import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counter from "./counter";
import num from "./num";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  combineReducers({ counter, num }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
