import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; 
import LanguageDetector from 'i18next-browser-languagedetector'; 
import uk from './languages/uk.json';  
import en from './languages/en.json';  

i18n
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en', 
    debug: false, 
    resources: {
      en: { translation: en }, 
      uk: { translation: uk }, 
    },
    interpolation: {
      escapeValue: false, 
    },
    ns: ['translation'], 
    defaultNS: 'translation', 
  });

export default i18n;