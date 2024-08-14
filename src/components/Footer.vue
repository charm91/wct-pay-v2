<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-10 gap-y-10 py-10">
        <div class="col-span-10 md:col-span-4">
          <img :src="Logo" alt="Logo" />
          <p class="text-gray-500 mt-8 leading-6">
            Bringing Cryptocurrency Payments To <br />
            Merchants Globally.
          </p>
        </div>

        <div class="col-span-10 md:col-span-6">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 sm:col-span-3 m-auto">
              <h4 class="text-[#1F3A93] text-sm font-semibold mb-4">
                Products
              </h4>

              <p
                v-for="menu in productMenus"
                :key="menu"
                class="text-gray-500 hover:text-primary-700 cursor-pointer mb-3"
              >
                {{ menu }}
              </p>
            </div>

            <div class="col-span-6 sm:col-span-3 m-auto">
              <h4 class="text-[#1F3A93] text-sm font-semibold mb-4">Company</h4>

              <p
                v-for="menu in companyMenus"
                :key="menu"
                class="text-gray-500 hover:text-primary-700 cursor-pointer mb-3"
              >
                {{ menu }}
              </p>
            </div>

            <div class="col-span-6 sm:col-span-3 m-auto">
              <h4 class="text-[#1F3A93] text-sm font-semibold mb-4">
                Resources
              </h4>

              <p
                v-for="menu in productMenus"
                :key="menu"
                class="text-gray-500 hover:text-primary-700 cursor-pointer mb-3"
              >
                {{ menu }}
              </p>
            </div>

            <div class="col-span-6 sm:col-span-3 m-auto">
              <h4 class="text-[#1F3A93] text-sm font-semibold mb-4">Legal</h4>

              <p
                v-for="menu in productMenus"
                :key="menu"
                class="text-gray-500 hover:text-primary-700 cursor-pointer mb-3"
              >
                {{ menu }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-gray-400 mb-2">
        © 2024 WCT Operations Pty Ltd. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script setup>
import Logo from "@assets/logo/logo.svg";
import { ref } from "vue";

const productMenus = ref([
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
]);

const companyMenus = ref([
  "About us",
  "Careers",
  "Press",
  "News",
  "Media kit",
  "Contact",
]);
const resourceMenus = ref([
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
]);

const legalMenus = ref([
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
]);
</script>
