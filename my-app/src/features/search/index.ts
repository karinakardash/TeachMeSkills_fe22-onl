import { all } from "@redux-saga/core/effects";
import { searchSaga } from "./searchSagas";
import { actions } from "./searchSlice";
export { SearchBar } from "./search-bar/SearchBar";
export { default } from "./searchSlice";
export const { search, searchSuccess, searchFailure } = actions;

export function* searchSagas() {
  yield all([searchSaga()]);
}
