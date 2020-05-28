import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import GoogleLogin from "./components/GoogleLogin";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GoogleLogin />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
