import { call, put, takeLatest } from "typed-redux-saga";
import { AuthApi } from "./api";
import { actions } from "./authSlice";

export function* registerSaga() {
  yield* takeLatest(actions.register, function* (action) {
    try {
      const result = yield* call(AuthApi.register, action.payload);
      yield* put(actions.registerSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.registerFailure(e.message));
      }
    }
  });
}

export function* activateSaga() {
  yield* takeLatest(actions.activate, function* (action) {
    try {
      const isActivated = yield* call(AuthApi.isActivated);
      if (!isActivated) {
        const result = yield* call(AuthApi.activate, action.payload);
      }
      yield* put(actions.activateSuccess());
    } catch (e) {
      yield* put(actions.activateFailure());
    }
  });
}

export function* loginSaga() {
  yield* takeLatest(actions.login, function* (action) {
    try {
      const result = yield* call(AuthApi.login, action.payload);
      yield* put(actions.loginSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.loginFailure(e.message));
      }
    }
  });
}

export function* loginSuccessSaga() {
  yield* takeLatest(actions.loginSuccess, function* (action) {
    yield* call(
      [localStorage, "setItem"],
      "access-token",
      action.payload.access
    );
    yield* call(
      [localStorage, "setItem"],
      "refresh-token",
      action.payload.refresh
    );
  });
}

export function* refreshSaga() {
  yield* takeLatest(actions.refresh, function* () {
    const refreshToken = yield* call(
      [localStorage, "getItem"],
      "refresh-token"
    );
    if (refreshToken) {
      try {
        const response = yield* call(AuthApi.refresh, refreshToken);
        yield* put(actions.refreshSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(actions.refreshFailure(e.message));
        }
      }
    }
  });
}

export function* refreshSuccessSaga() {
  yield* takeLatest(actions.refreshSuccess, function* (action) {
    yield* call(
      [localStorage, "setItem"],
      "refresh-token",
      action.payload.access
    );
  });
}
