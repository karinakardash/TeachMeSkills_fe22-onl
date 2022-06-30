import { all } from "redux-saga/effects";
import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  refreshSaga,
  registerSaga,
} from "./authSagas";
import { refresh } from "./authSlice";

export function* authSagas() {
  yield all([
    activateSaga(),
    registerSaga(),
    loginSuccessSaga(),
    loginSaga(),
    refreshSaga(),
  ]);
}
