import { IntlProvider } from "react-intl";
import { Route, Routes } from "react-router-dom";
import {
  TranslationMessages,
  useLanguageContext,
} from "./context/languageContext";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Offers from "./pages/Offers";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import RootLayout from "./pages/RootLayout";
import messages_en from "./translations/en.json";
import messages_sv from "./translations/sv.json";

const Navigation = () => {
  const { language } = useLanguageContext();

  const messages: TranslationMessages = {
    sv: messages_sv,
    en: messages_en,
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Index />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="offers" element={<Offers />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="product-detail" element={<ProductDetail />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="orderconfirmation"
            element={<OrderConfirmation />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default Navigation;
