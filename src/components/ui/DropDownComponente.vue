<template>
  <div class="dropdown-container" :class="{ 'w-full': fullWidth }">
    <!-- Dropdown trigger button -->
    <button @click="toggleDropdown" :class="[
      'dropdown-trigger flex items-center justify-between px-4 py-2 rounded-md',
      fullWidth ? 'w-full' : '',
      triggerClass
    ]" :aria-expanded="isOpen" aria-haspopup="true" :id="`dropdown-${_uid}`">
      <!-- Default trigger slot or fallback to label prop -->
      <slot name="trigger">
        <span>{{ label }}</span>
      </slot>

      <!-- Dropdown arrow icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="ml-2 h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- Dropdown menu -->
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-show="isOpen" class="dropdown-menu absolute mt-1 rounded-md shadow-lg z-10"
        :class="[menuClass, { 'w-full': fullWidth }]" :style="menuStyle" :aria-labelledby="`dropdown-${_uid}`"
        role="menu">
        <div class="py-1 rounded-md ring-1 ring-opacity-5">
          <slot>
            <div v-if="items.length" class="dropdown-items">
              <a v-for="(item, index) in items" :key="index" :href="item.href || '#'"
                @click="handleItemClick(item, $event)" class="block px-4 py-2 text-sm hover:opacity-80 cursor-pointer"
                :class="[
                  item.disabled ? 'opacity-50 cursor-not-allowed' : '',
                  item.class || ''
                ]" role="menuitem" :tabindex="item.disabled ? -1 : 0">
                {{ item.label }}
              </a>
            </div>
            <div v-else class="px-4 py-2 text-sm">
              No items available
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Dropdown'
  },
  items: {
    type: Array,
    default: () => []
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  closeOnClick: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  menuClass: {
    type: String,
    default: ''
  },
  menuStyle: {
    type: Object,
    default: () => ({})
  }
})

const isOpen = ref(false)
const emit = defineEmits(['toggle', 'item-click'])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

const closeDropdown = () => {
  if (isOpen.value) {
    isOpen.value = false
    emit('toggle', false)
  }
}

const handleClickOutside = (event) => {
  const container = document.querySelector('.dropdown-container')
  if (container && !container.contains(event.target)) {
    closeDropdown()
  }
}

const handleItemClick = (item, event) => {
  if (item.disabled) {
    event.preventDefault()
    return
  }

  emit('item-click', item)

  if (item.action && typeof item.action === 'function') {
    item.action(item)
  }

  if (props.closeOnClick) {
    closeDropdown()
  }
}

onMounted(() => {
  if (props.closeOnClickOutside) {
    document.addEventListener('click', handleClickOutside)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}
</style>
