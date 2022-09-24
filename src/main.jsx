import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemesStorage } from "./providers/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemesStorage>
      <App />
    </ThemesStorage>
  </React.StrictMode>,
);
