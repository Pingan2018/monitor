import { fork, all } from "redux-saga/effects";

import { watchFetchCounter } from "./counter";
import { watchFetchNum } from "./num";

export default function* rootSaga() {
  yield all([fork(watchFetchCounter), fork(watchFetchNum)]);
}
