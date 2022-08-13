import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { SortingPayload, SortingResponse } from "./types";

export const sortingSlice = createSlice({
  name: "sorting",
  initialState: { sortedPosts: [], limit: 9, offset: 0 } as {
    sortedPosts: Post[];
    limit: number;
    offset: number;
  },
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
