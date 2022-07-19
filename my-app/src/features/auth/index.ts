import { all } from "redux-saga/effects";
import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  refreshSaga,
  registerSaga,
} from "./authSagas";
import { actions } from "./authSlice";
export { authReducer } from "./authSlice";
export const { register, login, activate } = actions;

export function* authSagas() {
  yield all([
    activateSaga(),
    registerSaga(),
    loginSuccessSaga(),
    loginSaga(),
    refreshSaga(),
  ]);
}
