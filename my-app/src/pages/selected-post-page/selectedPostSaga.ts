import { put, call, takeLatest } from "typed-redux-saga";
import {
  getSelectedPostFetch,
  getSelectedPostSuccess,
  getSelectedPostFailure,
} from "./selectedPostSlice";
import { PostsApi } from "../../features/posts/alll-posts/api";

export function* selectedPostsSaga() {
  yield takeLatest(getSelectedPostFetch, function* (action) {
    try {
      const result = yield* call(PostsApi.getSelectedPostFetch, action.payload);
      yield* put(getSelectedPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getSelectedPostFailure());
      }
    }
  });
}
