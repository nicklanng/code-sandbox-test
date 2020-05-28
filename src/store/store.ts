import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { createEpicMiddleware } from "redux-observable";

import auth from "./auth";
import mode from "./mode";

// import rootEpic from "./epics";

// const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  auth: auth.reducer,
  mode: mode.reducer
});

const store = configureStore({
  reducer: rootReducer
  // middleware: [epicMiddleware]
});

// epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
