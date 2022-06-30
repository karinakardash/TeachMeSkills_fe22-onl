import { all } from "@redux-saga/core/effects";
import { sortingSaga } from "./sortingSagas";
import { actions } from "./sortingSlice";
export { SortingBar } from "./sorting-bar/SortingBar";
export { default } from "./sortingSlice";
export const { sorting, sortingSuccess, sortingFailure } = actions;

export function* sortingSagas() {
  yield all([sortingSaga()]);
}
