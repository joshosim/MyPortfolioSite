import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DialogProvider } from "./context/dialogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DialogProvider>
      <App />
    </DialogProvider>
  </React.StrictMode>
);
