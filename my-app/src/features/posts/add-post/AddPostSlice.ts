import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types";
import { AddPostPayload } from "./type";

export const addPostSlice = createSlice({
  name: "addPost",
  initialState: {} as { post?: Post },
  reducers: {
    addPost(state, action: { payload: AddPostPayload }) {},
    addPostSuccess(state, action: { payload: Post }) {
      state.post = action.payload;
    },
    addPostFailure(state, action: { payload: string }) {},
  },
});

export const { addPost, addPostSuccess, addPostFailure } = addPostSlice.actions;
export default addPostSlice.reducer;
