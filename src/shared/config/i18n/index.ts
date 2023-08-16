import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// const isDevMode = import.meta.env.MODE === 'development';

i18next
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: isDevMode,
    supportedLngs: ['en'], // ['en', 'ru']
    load: 'languageOnly',
    cleanCode: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;

/**
 * Issue 404 Error en-EN, ru-RU
 * https://github.com/i18next/i18next/issues/1687
 */
