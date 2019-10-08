import { put, takeEvery } from "redux-saga/effects";
import { ADD } from "./actionTypes";

function* fetchCounter() {
  // 创建并 yield 一个 dispatch Effect
  yield put({ type: ADD });
}

export function* watchFetchCounter() {
  console.log("add");
  yield takeEvery(ADD, fetchCounter);
}
