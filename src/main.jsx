import React from "react";
import ReactDOM from "react-dom/client";
import ThemeAppProvider from "./contexts/ThemeAppProvider"
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
);
