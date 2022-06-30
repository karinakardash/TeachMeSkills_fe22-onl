import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "Username" } as { username: string },
  reducers: {
    getUser() {},
    getUserSuccess(state, action: { payload: UserResponse }) {
      state.username = action.payload.username;
    },
    getUserFailure(state, action: { payload: string }) {},
  },
});

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;
export default userSlice.reducer;
