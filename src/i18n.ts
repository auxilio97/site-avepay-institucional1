import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationES from "./locales/es/translation.json";
import translationZH from "./locales/zh/translation.json";
import translationAR from "./locales/ar/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
  zh: {
    translation: translationZH,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;