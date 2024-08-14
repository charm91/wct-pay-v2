<template>
  <div class="rounded-3xl bg-white p-8 text-left h-full shadow-custom-blue">
    <img :src="props.img" alt="zap" />

    <p class="text-xl font-medium mt-6 text-[#222426]">{{ props.title }}</p>
    <p class="text-gray-500 text-sm mt-4">{{ props.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});
</script>
