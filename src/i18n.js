import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    freelancers: "Freelancers",
                    business: "Business",
                    aboutUs: "About",
                    howitworks: "How it works",
                    contact: "Contact",
                    login: "Log in",
                    getstarted: "Get Started →"

                }
            },

            uz: {
                translation: {
                    freelancers: "Freelancers",
                    business: "Business",
                    aboutUs: "About",
                    howitworks: "How it works",
                    contact: "Contact",
                    getstarted: "Get Started →"

                }
            }
        }
    })

export default i18n