<template>
  <button :class="className">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  class: {
    type: String,
    required: false,
    default: "",
  },
});

const className = computed(() => {
  return `bg-white rounded-full px-9 py-2 text-[#222426] text-sm ${props.class}`;
});
</script>
