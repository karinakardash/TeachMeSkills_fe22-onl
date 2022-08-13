import { call, put, takeLatest } from "typed-redux-saga";
import { UserApi } from "./api";
import { getUser, getUserFailure, getUserSuccess } from "./userSlice";

export function* getUserSaga() {
  yield* takeLatest(getUser, function* () {
    const accessToken = yield* call([localStorage, "getItem"], "access-token");
    if (accessToken) {
      try {
        const response = yield* call(UserApi.getInfo, { accessToken });
        yield* put(getUserSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(getUserFailure(e.message));
        }
      }
    }
  });
}
