import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./ContextAPI/Context";
import { ParentContexProvider } from "./ContextAPI/ParentContext";
const root = createRoot(document.getElementById("root"));
root.render(
  <ParentContexProvider>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </ParentContexProvider>
);
