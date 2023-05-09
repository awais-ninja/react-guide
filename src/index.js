import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
