import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types";

const myPostsSlice = createSlice({
  name: "myPosts",
  initialState: {
    myPosts: [],
    isLoading: false,
  } as { myPosts: Post[]; isLoading: boolean },
  reducers: {
    getMyPostsFetch: (state) => {
      state.isLoading = true;
    },
    getMyPostsSuccess: (state, action) => {
      state.myPosts = action.payload;
      state.isLoading = false;
    },
    getMyPostsFailure: (state, action) => {
      state.isLoading = false;
      console.error("getMyPostsFailure", action.payload);
    },
    reset(state) {
      state.myPosts = [];
    },
  },
});

export const { getMyPostsFetch, getMyPostsSuccess, getMyPostsFailure } =
  myPostsSlice.actions;
export default myPostsSlice.reducer;
