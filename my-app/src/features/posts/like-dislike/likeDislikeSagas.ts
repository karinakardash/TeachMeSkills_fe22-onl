import { put, call, takeEvery } from "typed-redux-saga";
import { sendLikeDislike } from "./api";
import { setState, reset } from "./likeDislikeSlice";

export function* logSetState() {
  yield takeEvery(setState, function* (action) {
    try {
      const result = yield* call(sendLikeDislike, action.payload);
    } catch (e) {
      yield put(reset({ id: action.payload.id }));
    }
  });
}
