import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export type TranslationMessages = {
  sv: { [key: string]: string };
  en: { [key: string]: string };
  [key: string]: { [key: string]: string };
};

type LanguageContextType = {
  language: string;
  setLanguage: (newLanguage: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState(
    localStorage.getItem("language") || "sv"
  );

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    if (!localStorage.getItem("language")) {
      setLanguage(browserLanguage === "sv" ? "sv" : "en");
    }
  }, []);

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "To use the language context, you must place it inside LanguageProvider tag"
    );
  }
  return context;
}
