import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AnimatePresence mode="wait">
          <App />
        </AnimatePresence>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
