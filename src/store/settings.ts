import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mode = createSlice({
  name: "mode",
  initialState: {
    windowSize: { x: 0, y: 0 }
  },
  reducers: {
    windowResized: (state, action: PayloadAction<any>) => {
      state.windowSize.x = action.payload.x;
      state.windowSize.y = action.payload.y;
    }
  }
});

export default mode;
