import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './translations/en.json';
import deTranslation from './translations/de.json';
import nlTranslation from './translations/nl.json';
import termsOfService from './translations/terms-of-service.json';
import privacyPolicy from './translations/privacy-policy.json';
import office from './translations/office.json';

const resources = {
    en: {
        translation: enTranslation,
        'terms-of-service': termsOfService.en,
        'privacy-policy': privacyPolicy.en,
        'office': office.en
    },
    de: {
        translation: deTranslation,
        'terms-of-service': termsOfService.de,
        'privacy-policy': privacyPolicy.de,
        'office': office.de
    },
    nl: {
        translation: nlTranslation,
        'terms-of-service': termsOfService.nl,
        'privacy-policy': privacyPolicy.nl,
        'office': office.nl
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['path', 'navigator', 'htmlTag', 'localStorage'],
            lookupFromPathIndex: 0,
            checkWhitelist: true,
            caches: ['localStorage'],
            excludeCacheFor: ['cimode'],
            htmlTag: document.documentElement,
            cookieOptions: { path: '/', sameSite: 'strict' }
        },
        whitelist: ['en', 'de', 'nl'],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;