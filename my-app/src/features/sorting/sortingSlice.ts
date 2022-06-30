import { createSlice } from "@reduxjs/toolkit";
import { SortingPayload, SortingResponse } from "./types";

export const sortingSlice = createSlice({
  name: "sorting",
  initialState: { response: null } as { response: SortingResponse | null },
  reducers: {
    sorting(state, action: { payload: SortingPayload }) {},
    sortingSuccess(state, action: { payload: SortingResponse }) {
      state.response = action.payload;
    },
    sortingFailure(state, action: { payload: string }) {
      console.error("sortingFailure", action.payload);
    },
  },
});

export const { actions } = sortingSlice;
export default sortingSlice.reducer;
