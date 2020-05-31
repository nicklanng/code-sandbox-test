import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import settings from "./store/settings";

import GameStage from "./components/GameStage";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <GameStage />
    </Provider>
  );
}

// Listen for window resize events
window.addEventListener("resize", () => {
  store.dispatch(
    settings.actions.windowResized({
      x: window.innerWidth,
      y: window.innerHeight
    })
  );
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
