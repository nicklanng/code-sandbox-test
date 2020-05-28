import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum Mode {
  Login,
  Connecting,
  CharacterSelect,
  CharacterCreation,
  LoadingWorld,
  InWorld
}

const mode = createSlice({
  name: "mode",
  initialState: Mode.Login,
  reducers: {
    transitionState: (state, action: PayloadAction<Mode>) => {
      state = action.payload;
    }
  }
});

export default mode;
