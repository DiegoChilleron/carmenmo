import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esLang from './es.json';
import enLang from './en.json';
import caLang from './ca.json';
import itLang from './it.json';


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            es: esLang,
            en: enLang,
            ca: caLang,
            it: itLang,
        }
    });

export default i18n;
