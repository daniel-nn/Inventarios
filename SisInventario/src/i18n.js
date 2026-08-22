import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/EN/translation.json';
import esTranslation from './translations/ES/translation.json';

// Configuración de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    lng: 'en', // Idioma por defecto - INGLÉS
    fallbackLng: 'en', // Fallback si no encuentra la traducción
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
