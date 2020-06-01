import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IVector2 from '../common/IVector2'

export interface IState {
  windowSize: IVector2
}

const mode = createSlice({
  name: "mode",
  initialState: {
    windowSize: { 
      x: window.innerWidth, 
      y: window.innerHeight
    },
    player: { 
      position: {x: 0, y: 0 },
    }
  },
  reducers: {
    windowResized: (state: IState, action: PayloadAction<any>) => {
      state.windowSize.x = action.payload.x;
      state.windowSize.y = action.payload.y;
    }
  }
});

export default mode;
