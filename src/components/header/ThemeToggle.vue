<template>
  <button @click="toggleTheme" :class="`
      relative h-6 w-12 rounded-full p-1 transition-colors duration-500
      ${isDark ? 'bg-zinc-800' : 'bg-sky-100'}
    `" :aria-label="t('navigation.theme.toggle')">
    <div class="relative h-full w-full">
      <!-- Estrellas con transición -->
      <Transition name="fade">
        <div v-if="isDark" class="absolute inset-0">
          <!-- Estrellas grandes -->
          <span class="absolute left-1/4 top-1/4 h-0.5 w-0.5 rounded-full bg-white"></span>
          <span class="absolute left-2/3 top-1/3 h-0.5 w-0.5 rounded-full bg-white"></span>
          <span class="absolute right-1/4 top-2/3 h-0.5 w-0.5 rounded-full bg-white"></span>
          <!-- Estrellas pequeñas -->
          <span class="absolute left-[45%] top-[20%] h-[1px] w-[1px] rounded-full bg-white opacity-70"></span>
          <span class="absolute left-[15%] top-[50%] h-[1px] w-[1px] rounded-full bg-white opacity-70"></span>
          <span class="absolute right-[15%] top-[40%] h-[1px] w-[1px] rounded-full bg-white opacity-70"></span>
          <span class="absolute right-[45%] top-[60%] h-[1px] w-[1px] rounded-full bg-white opacity-70"></span>
        </div>
      </Transition>

      <!-- Círculo del toggle con ícono usando transform -->
      <div :class="`
          absolute left-0.5 flex h-4 w-4 items-center justify-center rounded-full
          transition-all duration-500 ease-in-out will-change-transform
          ${isDark ?
          'translate-x-5 bg-zinc-700 text-amber-100' :
          'translate-x-0 bg-amber-400 text-amber-900'
        }
        `" :title="isDark ? t('navigation.theme.dark') : t('navigation.theme.light')">
        <Transition name="fade" mode="out-in">
          <Moon v-if="isDark" :size="10" />
          <Sun v-else :size="10" />
        </Transition>
      </div>
    </div>
  </button>
</template>

<script setup>
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from 'vue-i18n'

const { isDark, toggleTheme } = useTheme()
const { t } = useI18n()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
