import { put, takeEvery } from "redux-saga/effects";
import * as type from '../actionTypes';

function* fetchADD1() {
  // 创建并 yield 一个 dispatch Effect
  yield put({ type: type.ADD1_SUCCESS });
}

export function* watchFetchADD1() {
  yield takeEvery(type.ADD1, fetchADD1);
}
