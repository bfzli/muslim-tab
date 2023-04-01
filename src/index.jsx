import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application";

import { Provider } from "react-redux";
import { Redux } from "./configs/Redux";

import "./ui/styles/entrepreneur-tab.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Redux}>
      <Application />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
