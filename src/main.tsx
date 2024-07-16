import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CustomerProvider } from "./context/customerContext";
import { LanguageProvider } from "./context/languageContext";
import { ScreenSizeProvider } from "./contexts/screenSizeContext";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./slices/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter>
          <CustomerProvider>
            <ScreenSizeProvider>
              <Navigation />
            </ScreenSizeProvider>
          </CustomerProvider>
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);
