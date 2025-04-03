<template>
  <nav
    class="flex justify-center gap-3 fixed left-1/2 -translate-x-1/2 top-4 transition-all duration-300 ease z-10 cursor-default">
    <ul
      class="flex text-title bg-card-bg items-center justify-center gap-6 rounded-xl *:flex *:gap-3 *:p-3 text-sm *:items-center border border-border group">
      <NavItem special class="transition-all duration-300 group-hover:opacity-50 hover:!opacity-100">
        <template #content>
          <span class="inline-flex items-center">M<span class="nav-text-transition" :style="{
            maxWidth: scrollDirection === 'up' ? '150px' : '0',
            opacity: scrollDirection === 'up' ? 1 : 0,
            transform: scrollDirection === 'up' ? 'translateX(0)' : 'translateX(-8px)'
          }">iguel Hernández</span></span>
        </template>
      </NavItem>
      <NavItem v-for="item in navItems" :key="item.label"
        class="transition-all duration-300 group-hover:opacity-50 hover:!opacity-100">
        <template #icon>
          <component :is="item.icon" size="24" class="text-primary" />
        </template>
        <template #content>
          <span class="nav-text-transition" :style="{
            maxWidth: scrollDirection === 'up' ? '100px' : '0',
            opacity: scrollDirection === 'up' ? 1 : 0,
            transform: scrollDirection === 'up' ? 'translateX(0)' : 'translateX(-8px)'
          }">
            {{ item.label }}
          </span>
        </template>
      </NavItem>
    </ul>
    <ul
      class="flex text-title bg-card-bg items-center justify-center gap-3 rounded-xl *:flex *:gap-3 *:p-3 border border-border">
      <li class="transition-all duration-300">
        <LanguageSelector :items="languageOptions" @language-change="changeLanguage" />
      </li>
      <li class="transition-all duration-300">
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { Layers, GraduationCap, Calculator } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useScroll } from '@/composables/useScroll'
import NavItem from '@/components/header/NavItem.vue'
import ThemeToggle from '@/components/header/ThemeToggle.vue'
import LanguageSelector from '@/components/header/LanguageSelector.vue'

const { locale, t } = useI18n()
const { scrollDirection } = useScroll()

// Usar computed para que se actualice cuando cambie el idioma
const navItems = computed(() => [
  {
    icon: Calculator,
    label: t('navigation.menu.projects'),
    href: '#proyectos'
  },
  {
    icon: GraduationCap,
    label: t('navigation.menu.education'),
    href: '#educacion'
  },
  {
    icon: Layers,
    label: t('navigation.menu.technologies'),
    href: '#tecnologias'
  }
])

// Opciones de idioma
const languageOptions = computed(() => [
  { label: t('navigation.language.es'), value: 'es' },
  { label: t('navigation.language.en'), value: 'en' }
])

// Cambiar idioma
const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}

// Establecer el idioma inicial
onMounted(() => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    locale.value = savedLanguage
  }
})
</script>

<style scoped>
.nav-text-transition {
  transition: all 500ms cubic-bezier(0.25, 1, 0.5, 1);
  /* Curva de animación suavizada */
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  will-change: opacity, max-width, transform;
  /* Optimización para animaciones */
  padding-right: 2px;
  /* Previene cortes de texto durante la transición */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
