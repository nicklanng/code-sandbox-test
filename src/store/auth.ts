import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  authed: boolean;
  token: string;
};

let initialState: AuthState = {
  authed: false,
  token: ""
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchedGoogleToken: (state, action: PayloadAction<string>) => {
      state.authed = true;
      state.token = action.payload;
    }
  }
});

export default auth;
