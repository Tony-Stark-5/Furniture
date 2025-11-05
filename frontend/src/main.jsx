import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 507b3e1a6b723b76a42304df8ce7defc8869efdb
);
