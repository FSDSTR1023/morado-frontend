/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./src/App.jsx";
import App from "./App.jsx";
import "./index.css";
import RoomProvider from "./context/RoomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </RoomProvider>
);