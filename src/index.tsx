import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import settings from "./store/settings";

import GameStage from "./components/GameStage";
import Viewport from "./components/Viewport";
import Map from "./components/Map";
import Player from "./components/Player";

import "./styles.css";

function App() {
  let screenSize = { x: 1280, y: 720 };
  let playerPosition = { x: 0, y: 0 };

  return (
    <Provider store={store}>
      <div className="App">
        {/* <div>
          <GoogleLogin />
        </div> */}
        <GameStage>
          <Viewport
            screenSize={screenSize}
            target={playerPosition}
            offset={{ x: -24, y: -16 }}
          >
            <Map chunkId={4345} />
            <Player position={playerPosition} />
            <Player position={{ x: 1, y: 1 }} />
          </Viewport>
        </GameStage>
      </div>
    </Provider>
  );
}

// Listen for window resize events
window.addEventListener("resize", () => {
  store.dispatch(
    settings.actions.windowResized({
      x: window.innerWidth - 2,
      y: window.innerHeight - 5
    })
  );
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
