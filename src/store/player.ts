import { createSlice } from "@reduxjs/toolkit";

const player = createSlice({
  name: "player",
  initialState: {
    position: { x: 0, y: 0 }
  },
  reducers: {}
});

export default player;
