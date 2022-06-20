import { createSlice } from "@reduxjs/toolkit";

const selectedPostSlice = createSlice({
  name: "selectedPost",
  initialState: { id: null, isLoading: false } as {
    id: string | null | number;
    isLoading: boolean;
  },
  reducers: {
    setSelectedPost(state, action: { payload: string | number }) {
      state.id = action.payload;
    },
    getSelectedPostFetch: (state) => {
      state.isLoading = true;
    },
    getSelectedPostSuccess: (state, action) => {
      state.id = action.payload;
      state.isLoading = false;
    },
    getSelectedPostFailure: (state, action) => {
      state.isLoading = false;
      console.error("LoadingFailure", action.payload);
    },
  },
});

export const {
  setSelectedPost,
  getSelectedPostFetch,
  getSelectedPostSuccess,
  getSelectedPostFailure,
} = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
