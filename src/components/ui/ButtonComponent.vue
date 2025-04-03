<template>
  <button :class="[
    'rounded-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 flex items-center box relative',
    sizeClasses,
    typeClasses
  ]" @click="$emit('click')">
    <component v-if="iconLeft" :is="iconLeft" :class="[iconSizeClasses, { 'mr-2': text }]" />
    {{ text }}
    <component v-if="iconRight" :is="iconRight" :class="[iconSizeClasses, { 'ml-2': text }]" />
    <component v-if="icon" :is="icon" :class="[iconSizeClasses, { '': text }]" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  icon: {
    type: Object,
    default: null
  },
  iconLeft: {
    type: Object,
    default: null
  },
  iconRight: {
    type: Object,
    default: null
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-2 py-1 text-sm';
    case 'large':
      return 'px-6 py-3 text-lg';
    default:
      return 'px-4 py-2 text-base';
  }
});

const typeClasses = computed(() => {
  switch (props.type) {
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300';
    default:
      return 'bg-card-bg text-title hover:bg-card-bg-hover focus:ring-border border border-border';
  }
});

const iconSizeClasses = computed(() => {
  return 'size-6 text-primary';
});

defineEmits(['click']);
</script>
