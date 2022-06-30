import { createSlice } from "@reduxjs/toolkit";
import { GetPostPayload } from "../../features/posts/alll-posts/types";
import { Post } from "../../types";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    isLoading: false,
  } as {
    post: Post;
    isLoading: boolean;
  },
  reducers: {
    getSelectedPostFetch(state, action: { payload: GetPostPayload }) {
      state.isLoading = true;
    },
    getSelectedPostSuccess(state, action: { payload: Post }) {
      state.post.id = action.payload.id;
      state.post.image = action.payload.image;
      state.post.text = action.payload.text;
      state.post.title = action.payload.title;
      state.isLoading = false;
    },
    getSelectedPostFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  getSelectedPostFetch,
  getSelectedPostSuccess,
  getSelectedPostFailure,
} = postSlice.actions;
export default postSlice.reducer;
