import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import home from "./home";
import about from "./about";
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  combineReducers({ home, about }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
