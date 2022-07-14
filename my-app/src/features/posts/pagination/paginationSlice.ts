import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types";
import { GetAllPostsPayload } from "../alll-posts/types";

const paginationSlice = createSlice({
  name: "paginationPosts",
  initialState: {
    postsPerPage: [],
    isLoading: false,
    limit: 9,
    offset: 0,
  } as {
    postsPerPage: Post[];
    isLoading: boolean;
    limit: number;
    offset: number;
  },
  reducers: {
    getAllPostsWithPaginationFetch: (
      state,
      action: { payload: GetAllPostsPayload }
    ) => {
      state.isLoading = true;
    },
    getAllPostsWithPaginationSuccess: (state, action) => {
      state.postsPerPage = action.payload;
      state.isLoading = false;
    },
    getAllPostsWithPaginationFailure: (state, action) => {
      state.isLoading = false;
      console.error("GetAllPostsWithPaginationFailure", action.payload);
    },
  },
});

export const {
  getAllPostsWithPaginationFetch,
  getAllPostsWithPaginationSuccess,
  getAllPostsWithPaginationFailure,
} = paginationSlice.actions;
export default paginationSlice.reducer;
