import { createI18n } from 'vue-i18n'
import enTechnologies from '@/locales/en/technologies.json'
import esTechnologies from '@/locales/es/technologies.json'
import enNavigation from '@/locales/en/navigation.json'
import esNavigation from '@/locales/es/navigation.json'
import enGeneral from '@/locales/en/general.json'
import esGeneral from '@/locales/es/general.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'es',
  fallbackLocale: 'en',
  messages: {
    en: {
      technologies: enTechnologies,
      navigation: enNavigation,
      general: enGeneral,
    },
    es: {
      technologies: esTechnologies,
      navigation: esNavigation,
      general: esGeneral,
    },
  },
})

export default i18n
