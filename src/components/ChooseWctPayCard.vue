<template>
  <div
    class="rounded-3xl bg-[#0000001A] px-8 pb-8 pt-8 hover:pt-6 text-left h-full cursor-pointer hover:border-b-4 border-indigo-800 transition-all"
  >
    <img :src="props.icon" alt="zap" class="size-14" />

    <p class="text-xl font-medium mt-6 text-white">{{ props.title }}</p>
    <p class="text-gray-300 text-sm mt-2">{{ props.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
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
