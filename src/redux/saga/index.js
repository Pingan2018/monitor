import { fork, all } from "redux-saga/effects";

import { watchFetchADD1 } from "./home";
import { watchFetchADD10 } from "./about";

export default function* rootSaga() {
  yield all([fork(watchFetchADD1), fork(watchFetchADD10)]);
}
