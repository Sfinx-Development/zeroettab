import { Route, Routes } from "react-router-dom";
import {
  TranslationMessages,
  useLanguageContext,
} from "./context/languageContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import RootLayout from "./pages/RootLayout";
import { IntlProvider } from "react-intl";
import messages_en from "./translations/en.json";
import messages_sv from "./translations/sv.json";
import Offers from "./pages/Offers";

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
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default Navigation;
