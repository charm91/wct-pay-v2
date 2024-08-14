<template>
  <header class="text-white py-4 relative">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo">
        <img src="@src/assets/logo-light.svg" class="h-8" />
      </div>
      <nav class="md:flex space-x-8 hidden">
        <a
          v-for="menu in menus"
          href="#"
          class="text-white font-bold text-sm leading-6"
          >{{ menu }}</a
        >
      </nav>

      <div class="md:flex hidden gap-4 items-center">
        <a href="#" class="mx-4">Login</a>
        <Button> Get Started </Button>
      </div>
      <button @click="toggleMenu" class="md:hidden flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="isMenuOpen"
      class="md:hidden text-white bg-primary-gradient text-center transition-all ease-in-out duration-100"
    >
      <a
        v-for="menu in menus"
        href="#"
        class="block px-4 py-2 text-white hover:bg-[#0f2667]"
      >
        {{ menu }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Button from "@base/Button.vue";

const isMenuOpen = ref(false);

const menus = ref([
  "About Us",
  "Services",
  "Solutions",
  "Benefits",
  "Contact Us",
]);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
