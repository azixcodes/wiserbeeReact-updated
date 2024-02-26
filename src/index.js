import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./ContextAPI/Context";
const root = createRoot(document.getElementById("root"));
root.render(
  // <AppContextProvider>
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
  // </AppContextProvider>
);
