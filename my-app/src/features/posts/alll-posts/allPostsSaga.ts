import { takeLatest } from "@redux-saga/core/effects";
import { put, call, takeEvery } from "typed-redux-saga";
import {
  getAllPostsFetch,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "./allPostsSlice";
import { PostsApi } from "./api";

export function* allPostsSaga() {
  yield takeLatest(getAllPostsFetch, function* () {
    try {
      const result = yield* call(PostsApi.getAllPostsFetch);
      console.log(result);
      yield* put(getAllPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getAllPostsFailure(e.message));
      }
    }
  });
}
