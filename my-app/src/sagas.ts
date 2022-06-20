import { all } from "redux-saga/effects";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { registerSaga } from "./features/auth/authSagas";
import { authSagas } from "./features/auth";
import { allPostsSaga } from "./features/posts/alll-posts/allPostsSaga";

export function* rootSaga() {
  yield all([logSetState(), authSagas(), allPostsSaga()]);
}
