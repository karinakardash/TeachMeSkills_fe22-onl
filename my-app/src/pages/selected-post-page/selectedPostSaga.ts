import { put, call, takeLatest } from "typed-redux-saga";
import {
  setSelectedPost,
  getSelectedPostFetch,
  getSelectedPostSuccess,
  getSelectedPostFailure,
} from "../../features/posts/selectedPostSlice";
import { PostsApi } from "../../features/posts/alll-posts/api";

export function* selectedPostsSaga() {
  yield takeLatest(getSelectedPostFetch, function* () {
    try {
      const result = yield* call(PostsApi.getSelectedPostFetch);
      console.log(result);
      yield* put(getSelectedPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getSelectedPostFailure(e.message));
      }
    }
  });
}
