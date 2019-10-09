import { put, takeEvery } from "redux-saga/effects";
import * as type from '../actionTypes';

function* fetchADD10() {
  // 创建并 yield 一个 dispatch Effect
  yield put({ type: type.ADD10_SUCCESS });
}

export function* watchFetchADD10() {
  yield takeEvery(type.ADD10, fetchADD10);
}
