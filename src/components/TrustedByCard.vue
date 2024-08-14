<template>
  <div class="rounded-3xl p-5 md:p-14 shadow-custom-blue space-y-10 text-left">
    <div class="p-1.5 rounded-full bg-primary-100 w-fit">
      <div class="p-1.5 bg-primary-200 rounded-full">
        <img :src="props.icon" alt="zap" class="size-6" />
      </div>
    </div>
    <h4 class="text-gray-900 text-3xl md:text-[40px] font-semibold">
      {{ props.title }}
    </h4>
    <div>
      <p class="text-gray-500 leading-[30px]">
        {{ props.desc }}
      </p>
      <p class="text-gray-500 leading-[30px] mt-2">
        {{ props.desc2 }}
      </p>
    </div>
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
  desc2: {
    type: String,
    required: false,
  },
});
</script>
