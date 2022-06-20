import { all } from "redux-saga/effects";
import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  registerSaga,
} from "./authSagas";

export function* authSagas() {
  yield all([activateSaga(), registerSaga(), loginSuccessSaga(), loginSaga()]);
}
