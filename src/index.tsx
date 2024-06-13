import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UIControllerProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UIControllerProvider>
        <App />
      </UIControllerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
