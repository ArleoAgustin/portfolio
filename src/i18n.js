import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: 'es', // Idioma inicial, puedes cambiarlo a 'en' si prefieres inglés por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react ya se encarga de la protección XSS
    }
  });

export default i18n;