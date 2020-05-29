import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Stage } from "react-pixi-fiber";

import GoogleLogin from "./components/GoogleLogin";
import Viewport from "./components/Viewport";
import Map from "./components/Map";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <GoogleLogin />
        </div>

        <Stage options={{ backgroundColor: 0x6495ed, width: 512, height: 512 }}>
          <Viewport>
            <Map chunkId={4345} />
          </Viewport>
        </Stage>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
