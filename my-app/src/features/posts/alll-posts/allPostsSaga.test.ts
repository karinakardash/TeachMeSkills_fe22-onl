import { expectSaga } from "redux-saga-test-plan";
import { allPostsSaga } from "./allPostsSaga";
import * as matchers from "redux-saga-test-plan/matchers";
import { PostsApi } from "./api";
import {
  getAllPostsFailure,
  getAllPostsFetch,
  getAllPostsSuccess,
} from "./allPostsSlice";
import { throwError } from "redux-saga-test-plan/providers";

test("success saga flow", () => {
  return expectSaga(allPostsSaga)
    .provide([[matchers.call.fn(PostsApi.getAllPostsFetch), []]])
    .put(getAllPostsSuccess([]))
    .not.put.like({ action: { type: getAllPostsFailure("any string").type } })
    .dispatch(getAllPostsFetch())
    .run();
});

test("failure saga flow", () => {
  return expectSaga(allPostsSaga)
    .provide([
      [
        matchers.call.fn(PostsApi.getAllPostsFetch),
        throwError(new Error("failure")),
      ],
    ])
    .put(getAllPostsFailure("failure"))
    .not.put.like({ action: { type: getAllPostsSuccess([]).type } })
    .dispatch(getAllPostsFetch())
    .run();
});
