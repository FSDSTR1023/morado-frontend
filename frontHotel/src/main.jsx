/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RoomProvider from "./context/RoomContext.jsx";

// import PplProvider from "./context/PplContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RoomProvider>
  {/* <PplProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  {/* </PplProvider> */}
    </RoomProvider>
);
