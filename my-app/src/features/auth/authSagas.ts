import { put, call, takeLatest } from "typed-redux-saga";
import { AuthApi } from "./api";
import { activate, login, loginFailure, loginSuccess } from "./authSlice";
import {
  activateFailure,
  activateSuccess,
  register,
  registerFailure,
  registerSuccess,
} from "./authSlice";

export function* registerSaga() {
  yield takeLatest(register, function* (action) {
    try {
      const result = yield* call(AuthApi.register, action.payload);
      console.log(result);
      yield* put(registerSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(registerFailure(e.message));
      }
    }
    console.log(action);
  });
}

export function* activateSaga() {
  yield takeLatest(activate, function* (action) {
    try {
      const isActivated = yield* call(AuthApi.isActivated);
      if (!isActivated) {
        const result = yield* call(AuthApi.activate, action.payload);
      }
      yield* put(activateSuccess);
    } catch (e) {
      yield* put(activateFailure());
    }
  });
}

export function* loginSaga() {
  yield takeLatest(login, function* (action) {
    try {
      const result = yield* call(AuthApi.login, action.payload);
      console.log(result);
      yield* put(loginSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(loginFailure(e.message));
      }
    }
    console.log(action);
  });
}

export function* loginSuccessSaga() {
  yield takeLatest(loginSuccess, function* (action) {
    yield* call(
      [localStorage, "setItem"],
      "access-tokens",
      action.payload.access
    );
    yield* call(
      [localStorage, "setItem"],
      "refresh-tokens",
      action.payload.refresh
    );
  });
}
