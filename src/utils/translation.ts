import i18n from "i18next";
import backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";


i18n
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        load: 'languageOnly',
        debug: true,
        backend: {
            loadPath: 'locales/{{lng}}.json'
        },
        fallbackLng: 'de',
        react: {
            wait: true
        }
    });
