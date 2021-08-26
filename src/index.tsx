import React from "react";
import ReactDOM from "react-dom";

import "./styles/css/index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
