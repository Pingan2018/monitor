import { put, takeEvery } from "redux-saga/effects";
import { PLUS } from "./actionTypes";

function* fetchNum() {
  // 创建并 yield 一个 dispatch Effect
  yield put({ type: PLUS });
}

export function* watchFetchNum() {
  console.log("plus");
  yield takeEvery(PLUS, fetchNum);
}
