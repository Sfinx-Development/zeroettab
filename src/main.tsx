import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CustomerProvider } from "./context/customerContext";
import { LanguageProvider } from "./context/languageContext";
import { ScreenSizeProvider } from "./contexts/screenSizeContext";
import Navigation from "./navigation";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
    <LanguageProvider>
      <BrowserRouter>
        <CustomerProvider>
          <ScreenSizeProvider>
            <Navigation />
          </ScreenSizeProvider>
        </CustomerProvider>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);
