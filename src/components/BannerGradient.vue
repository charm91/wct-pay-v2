<template>
  <div class="wrapper relative">
    <div class="preview">
      <div class="gradient-wrapper">
        <canvas
          ref="gc"
          id="gradient-canvas"
          data-transition-in
          class="h-screen w-screen"
          :style="colors"
        />
      </div>
    </div>
    <div class="absolute inset-0">
      <slot />
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
        class="absolute h-16 w-screen bottom-0 bg-transparent"
      >
        <polygon fill="white" points="0,24 24,0 24,24" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import Button from "@base/Button.vue";

import { Gradient } from "../gradient";
import { ref, onMounted, computed } from "vue";

const gradient = new Gradient();
const color1 = "#282592";
const color2 = "#a131fc";
const color3 = "#282592";
const color4 = "#014ec9";

const colors = computed(() => {
  return {
    "--gradient-color-1": color1,
    "--gradient-color-2": color2,
    "--gradient-color-3": color3,
    "--gradient-color-4": color4,
  };
});

onMounted(() => {
  gradient.initGradient("#gradient-canvas");
});
</script>
