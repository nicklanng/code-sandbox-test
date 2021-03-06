import { createSlice } from "@reduxjs/toolkit";

export enum Mode {
  Login,
  LoadingAssets,
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
    LoadingAssets: () => Mode.LoadingAssets,
    connecting: () => Mode.Connecting
  }
});

export default mode;
