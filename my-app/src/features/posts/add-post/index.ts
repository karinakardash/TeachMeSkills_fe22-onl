import { addPostSaga } from "./AddPostSaga";
import { all } from "redux-saga/effects";
export { AddPostForm } from "../add-post/ui/AddPostForm";
export { default } from "./AddPostSlice";

export function* addPostSagas() {
  yield all([addPostSaga()]);
}
