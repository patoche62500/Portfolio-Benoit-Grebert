import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
// react router
import Router from "./composents/router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
