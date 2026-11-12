"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    let saved;
    try {
      saved = localStorage.getItem("portfolio-language");
    } catch {}
    setLanguage(
      requested === "en" || requested === "es"
        ? requested
        : saved === "en"
          ? "en"
          : "es",
    );
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(value) {
    setLanguage(value);
    try {
      localStorage.setItem("portfolio-language", value);
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", value);
    window.history.replaceState(null, "", url);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
