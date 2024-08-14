<template>
  <section class="text-white py-10 md:py-24 relative">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-6">
          <div class="space-y-6 text-left">
            <h2 class="hero-title">
              <slot name="title"></slot>
            </h2>
            <p class="text-xl leading-8 font-normal">
              <slot name="subtitle"></slot>
            </p>
            <Button class="font-semibold">Enquire Now</Button>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 relative overflow-hidden">
          <div class="mt-16 lg:mt-0">
            <img
              :src="props.img"
              alt="Crypto Payment Chart"
              class="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@base/Button.vue";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
});
</script>
