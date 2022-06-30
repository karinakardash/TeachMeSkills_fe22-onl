import { all } from "redux-saga/effects";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { authSagas } from "./features/auth";
import { allPostsSaga } from "./features/posts/alll-posts/allPostsSaga";
import { userSagas } from "./features/user";
import { searchSagas } from "./features/search";
import { selectedPostsSaga } from "./pages/selected-post-page/selectedPostSaga";

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    allPostsSaga(),
    userSagas(),
    searchSagas(),
    selectedPostsSaga(),
  ]);
}
