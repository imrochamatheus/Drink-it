import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProviders } from "./providers";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  </BrowserRouter>
);
