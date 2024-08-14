<template>
  <div class="wrapper relative">
    <div class="preview">
      <div class="gradient-wrapper">
        <canvas
          ref="gc"
          id="gradient-canvas"
          data-transition-in
          :style="colors"
        />
      </div>
    </div>
    <div class="absolute inset-0">
      <section class="text-white py-10 md:py-24 relative">
        <div class="container mx-auto flex flex-col lg:flex-row items-center">
          <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-6">
              <div class="space-y-6">
                <h2 class="hero-title">
                  Bringing <br />
                  Cryptocurrency <br />
                  Payments To <br />
                  Merchants Globally.
                </h2>
                <p class="text-xl leading-8 font-normal">
                  WCT Pay enables merchants to accept cryptocurrency <br />
                  globally with our secure, user-friendly platform, unlocking
                  new
                  <br />
                  customer and revenue opportunities.
                </p>
                <Button class="font-semibold">Enquire Now</Button>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6 relative overflow-hidden">
              <div class="mt-16 lg:mt-0">
                <!-- Insert image/chart here -->
                <img
                  src="@src/assets/dashboard.png"
                  alt="Crypto Payment Chart"
                  class="h-full w-full"
                />
              </div>
            </div>
          </div>
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
      </section>
    </div>
  </div>
</template>

<script setup>
import Button from "@base/Button.vue";

import { Gradient } from "../gradient";
import { ref, onMounted, computed } from "vue";

const gradient = new Gradient();
const color1 = "#c3e4ff";
const color2 = "#6ec3f4";
const color3 = "#eae2ff";
const color4 = "#b9beff";

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
