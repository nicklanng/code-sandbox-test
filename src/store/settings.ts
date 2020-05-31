import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mode = createSlice({
  name: "mode",
  initialState: {
    windowSize: { x: window.innerWidth, y: window.innerHeight }
  },
  reducers: {
    windowResized: (state, action: PayloadAction<any>) => {
      state.windowSize.x = action.payload.x;
      state.windowSize.y = action.payload.y;
    }
  }
});

export default mode;
