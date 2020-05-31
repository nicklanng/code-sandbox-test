import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import auth from "./auth";
import settings from "./settings";
import mode from "./mode";
import player from "./player";

import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  auth: auth.reducer,
  settings: settings.reducer,
  mode: mode.reducer,
  player: player.reducer
});

const store = configureStore({
  devTools: { name: "Mundaz" },
  reducer: rootReducer,
  middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
