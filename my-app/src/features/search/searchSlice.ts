import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { SearchPayload, SearchResponse } from "./types";

export const searchSlice = createSlice({
  name: "search",
  initialState: { response: null } as { response: SearchResponse | null },
  reducers: {
    search(state, action: { payload: SearchPayload }) {},
    searchSuccess(state, action: { payload: SearchResponse }) {
      state.response = action.payload;
    },
    searchFailure(state, action: { payload: string }) {
      console.error("getUserFailure", action.payload);
    },
    reset(state) {
      state.response = null;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
