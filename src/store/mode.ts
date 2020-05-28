import { createSlice, Action } from "@reduxjs/toolkit";

export enum Mode {
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
    connecting: _ => Mode.Connecting
  }
});

export default mode;
