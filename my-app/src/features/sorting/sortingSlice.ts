import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { SortingPayload, SortingResponse } from "./types";

export const sortingSlice = createSlice({
  name: "sorting",
  initialState: { sortedPosts: [] } as { sortedPosts: Post[] },
  reducers: {
    sorting(state, action: { payload: SortingPayload }) {},
    sortingSuccess(state, action) {
      state.sortedPosts = action.payload;
    },
    sortingFailure(state, action: { payload: string }) {
      console.error("sortingFailure", action.payload);
    },
  },
});

export const { actions } = sortingSlice;
export default sortingSlice.reducer;
