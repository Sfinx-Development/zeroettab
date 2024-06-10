import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ScreenSizeProvider } from "./contexts/screenSizeContext";
import Navigation from "./navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenSizeProvider>
        <Navigation />
      </ScreenSizeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
