import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    allPosts: [],
    isLoading: false,
    limit: 9,
    offset: 0,
  } as { allPosts: Post[]; isLoading: boolean; limit: number; offset: number },
  reducers: {
    getAllPostsFetch: (state) => {
      state.isLoading = true;
    },
    getAllPostsSuccess: (state, action) => {
      state.allPosts = action.payload;
      state.isLoading = false;
    },
    getAllPostsFailure: (state, action) => {
      state.isLoading = false;
      console.error("RegisterFailure", action.payload);
    },
    reset(state) {
      state.allPosts = [];
    },
  },
});

export const { getAllPostsFetch, getAllPostsSuccess, getAllPostsFailure } =
  allPostsSlice.actions;
export default allPostsSlice.reducer;
