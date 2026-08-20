"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => undefined,
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("strum-locale");
    if (savedLocale === "en" || savedLocale === "vi") {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    localStorage.setItem("strum-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
