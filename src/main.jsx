import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeToggleProvider } from "./contexts/ThemeContext.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline>
        <Router basename="/">
          <App />
        </Router>
      </CssBaseline>
    </ThemeToggleProvider>
  </React.StrictMode>
);
