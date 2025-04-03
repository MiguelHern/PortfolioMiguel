<template>
  <li :class="[
    'flex items-center',
    { 'nav-item-special': special }
  ]" role="menuitem">
    <slot name="icon"></slot>
    <slot name="content"></slot>
  </li>
</template>

<script setup>
defineProps({
  special: {
    type: Boolean,
    default: false
  }
})
</script>
