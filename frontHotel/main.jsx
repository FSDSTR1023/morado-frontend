import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import './src/index.css';
import RoomProvider from './src/context/RoomContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomProvider>
  </React.StrictMode>
);

// /* eslint-disable no-unused-vars */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// // import App from "./src/App.jsx";
// import App from "./src/App.jsx";
// import "./src/index.css";
// import RoomProvider from "./src/context/RoomContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RoomProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//   </RoomProvider>
// );
