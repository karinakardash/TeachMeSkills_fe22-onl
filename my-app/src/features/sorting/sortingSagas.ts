import { call, put, takeLatest } from "typed-redux-saga";
import { SortingApi } from "./api";
import { actions } from "./sortingSlice";

export function* sortingSaga() {
  yield* takeLatest(actions.sorting, function* (action) {
    try {
      const result = yield* call(SortingApi.sorting, action.payload);
      yield* put(actions.sortingSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.sortingFailure(e.message));
      }
    }
  });
}
