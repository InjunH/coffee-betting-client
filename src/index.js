import React from "react";
import ReactDOM from "react-dom";
// import { Switch, Route } from "react-router-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
