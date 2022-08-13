import { takeLatest } from "@redux-saga/core/effects";
import { put, call } from "typed-redux-saga";
import { PostsApi } from "../alll-posts/api";
import {
  getAllPostsWithPaginationFailure,
  getAllPostsWithPaginationSuccess,
  getAllPostsWithPaginationFetch,
} from "./paginationSlice";

export function* allPostsWithPaginationSaga() {
  yield takeLatest(getAllPostsWithPaginationFetch, function* (action) {
    try {
      const result = yield* call(
        PostsApi.getAllPostsWithPaginationFetch,
        action.payload
      );
      yield* put(getAllPostsWithPaginationSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getAllPostsWithPaginationFailure(e.message));
      }
    }
  });
}
