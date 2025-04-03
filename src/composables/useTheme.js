import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  // Detectar preferencia del sistema
  const detectSystemPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Aplicar tema
  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Toggle tema
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  // Detectar cambio de preferencia del sistema
  const setupSystemPreferenceListener = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e) => {
      // Solo cambiar si no hay preferencia guardada
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        applyTheme(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    // Limpiar listener
    onBeforeUnmount(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }

  // Inicializar tema
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = detectSystemPreference()
    }

    applyTheme(isDark.value)
    setupSystemPreferenceListener()
  })

  // Actualizar tema cuando cambie isDark
  watch(isDark, (newValue) => {
    applyTheme(newValue)
  })

  return {
    isDark,
    toggleTheme
  }
}
