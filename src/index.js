import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";

import App from "components/app";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App path="/*" />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
