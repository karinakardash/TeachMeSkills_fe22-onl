import { createSlice } from "@reduxjs/toolkit";

const markerSlice = createSlice({
  name: "markedPost",
  initialState: {} as Record<string, { state: boolean }>,
  reducers: {
    setMarker(
      state,
      { payload }: { payload: { id: string | number; state: boolean } }
    ) {
      if (payload.state === true) {
        state[payload.id] = { state: true };
      } else if (payload.state === false) {
        state[payload.id] = { state: false };
      }
    },
  },
});

export const { setMarker } = markerSlice.actions;
export default markerSlice.reducer;
