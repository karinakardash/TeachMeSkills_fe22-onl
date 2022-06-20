import { takeLatest } from "@redux-saga/core/effects";
import { put, call, takeEvery } from "typed-redux-saga";
import {
  getAllPostsFetch,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "./allPostsSlice";
import { PostsApi } from "./api";

/*function* workGetAllPostsFetch() {
  const allPosts = yield* call(() =>
    fetch("https://studapi.teachmeskills.by/blog/posts/")
  );
  const formattedAllPosts = yield allPosts.json();
  const formattedAllPostsShortened = formattedAllPosts.slice(0, 10);
  yield* put(getAllPostsSuccess(formattedAllPostsShortened));
}

export function* allPostsSaga() {
  yield takeEvery("allPosts/getAllPostsFetch", workGetAllPostsFetch);
}*/

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
