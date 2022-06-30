import { takeLatest } from "@redux-saga/core/effects";
import { put, call, takeEvery } from "typed-redux-saga";
import {
  getMyPostsFetch,
  getMyPostsSuccess,
  getMyPostsFailure,
} from "./myPostsSlice";
import { MyPostsApi } from "./api";

export function* myPostsSaga() {
  yield takeLatest(getMyPostsFetch, function* () {
    try {
      const result = yield* call(MyPostsApi.getMyPostsFetch);
      console.log(result);
      yield* put(getMyPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getMyPostsFailure(e.message));
      }
    }
  });
}
