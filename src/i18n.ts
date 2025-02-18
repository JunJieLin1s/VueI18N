import { createI18n } from 'vue-i18n';
import en from './locales/en';
import fr from './locales/fr';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr },
  legacy: false,
  globalInjection: true,
  numberFormats: {
    en: { currency: { style: 'currency', currency: 'USD' } },
    fr: { currency: { style: 'currency', currency: 'EUR' } }
  }
});
export default i18n;