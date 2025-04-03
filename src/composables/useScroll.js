import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = () => {
  const lastScrollY = ref(0)
  const scrollDirection = ref('up')

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (Math.abs(currentScrollY - lastScrollY.value) < 10) return

    scrollDirection.value = currentScrollY > lastScrollY.value ? "down" : "up"
    lastScrollY.value = currentScrollY
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))


  return {
    handleScroll,
    lastScrollY,
    scrollDirection,
  }
}
