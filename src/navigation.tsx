import { IntlProvider } from "react-intl";
import { Route, Routes } from "react-router-dom";
import {
  TranslationMessages,
  useLanguageContext,
} from "./context/languageContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Offers from "./pages/Offers";
import Projects from "./pages/Projects";
import RootLayout from "./pages/RootLayout";
import messages_en from "./translations/en.json";
import messages_sv from "./translations/sv.json";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import News from "./pages/News";
import ParallaxServices from "./components/parallax/ParallaxServices";
import ServiceDetail from "./pages/ServiceDetail";
// import PricePage from "./pages/PricePage";

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
          <Route path="services" element={<Offers />}></Route>
          <Route path="/tjanster" element={<ParallaxServices />} />
          <Route path="/tjanster/:slug" element={<ServiceDetail />} />
          {/* <Route path="/priser" element={<PricePage />} /> */}
          <Route path="news" element={<News />}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default Navigation;
