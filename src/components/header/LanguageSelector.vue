<template>
  <div ref="dropdownRef" class="relative">
    <button @click="toggleDropdown" class="flex items-center focus:outline-none" aria-haspopup="true"
      :aria-expanded="isOpen">
      <Languages class="text-xl cursor-pointer text-primary" />
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute right-0 mt-2 w-36 rounded-md bg-card-bg shadow-lg z-20" role="menu">
        <div class="py-1">
          <button v-for="item in items" :key="item.value" @click="selectItem(item)"
            class="block w-full text-left px-4 py-2 text-sm text-title hover:bg-inner-bg" role="menuitem">
            {{ item.label }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Languages } from 'lucide-vue-next'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['language-change'])
const isOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectItem = (item) => {
  emit('language-change', item.value)
  isOpen.value = false
}

// Cerrar dropdown al hacer clic fuera
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') isOpen.value = false
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
