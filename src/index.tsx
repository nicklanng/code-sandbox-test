import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Stage } from "react-pixi-fiber";

import GoogleLogin from "./components/GoogleLogin";
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

        <Stage
          options={{
            backgroundColor: 0x6495ed,
            width: screenSize.x,
            height: screenSize.y
          }}
        >
          <Viewport
            screenSize={screenSize}
            target={playerPosition}
            offset={{ x: -24, y: -16 }}
          >
            <Map chunkId={4345} />
            <Player position={playerPosition} />
          </Viewport>
        </Stage>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
