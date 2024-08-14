<template>
  <section class="py-10">
    <div class="container mx-auto text-center">
      <h3 class="section-title">Trusted By</h3>
      <p class="section-subtitle">Join 4,000+ companies already growing</p>
      <div class="grid grid-cols-10 gap-4 pt-6">
        <div
          class="shadow-custom-blue text-gray-500 px-8 py-4 rounded-3xl flex items-center gap-4 col-span-5 md:col-span-3 lg:col-span-2"
          v-for="logo in logos"
        >
          <img :src="logo.icon" alt="" class="size-8" />
          <p class="font-semibold">{{ logo.label }}</p>
        </div>
      </div>

      <div class="my-20">
        <div class="grid gap-y-8 md:gap-x-8 grid-cols-12 py-12">
          <div class="md:col-span-6 col-span-12">
            <TrustedByCard
              :icon="Lighting"
              :title="'Crypto Payment Solutions'"
              :desc="`WCT Pay’s crypto payment solutions enable payment service providers, cashiers and merchants to accept crypto payments from their clients, unlocking a global customer base of 562 million cryptocurrency users.`"
            />
          </div>
          <div class="md:col-span-6 col-span-12 m-auto">
            <img src="@assets/dummy.jpg" alt="dummy" class="h-96" />
          </div>
        </div>

        <div class="grid gap-y-8 md:gap-x-8 grid-cols-12 py-12">
          <div class="md:col-span-6 col-span-12 m-auto">
            <img src="@assets/dummy.jpg" alt="dummy" class="h-96" />
          </div>
          <div class="md:col-span-6 col-span-12">
            <TrustedByCard
              :icon="Lighting"
              :title="'Full service web based platform'"
              :desc="`WCT Pay offers a full service web based platform for businesses to self-manage their payments, plugins for payment gateways and direct API connectivity to allow clients to customise payment flows to suit their business needs. `"
            />
          </div>
        </div>

        <div class="grid gap-y-8 md:gap-x-8 grid-cols-12 py-12">
          <div class="md:col-span-6 col-span-12">
            <TrustedByCard
              :icon="Lighting"
              :title="'Crypto Payment Solutions'"
              :desc="`WCT Pay offers same-day settlement and payouts, dedicated client coverage, lower transaction fees, faster settlements and eliminates chargebacks for merchants.`"
              :desc2="`Contact us today to discover how you can add to your bottom line, reduce fees, and benefit from faster, more secure transactions without the risk of fraud or chargebacks.`"
            />
          </div>
          <div class="md:col-span-6 col-span-12 m-auto">
            <img src="@assets/dummy.jpg" alt="dummy" class="h-96" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Catalog from "@assets/logo/catalog.svg";
import Circooles from "@assets/logo/circooles.svg";
import Layers from "@assets/logo/layers.svg";
import Quotient from "@assets/logo/quotient.svg";
import Sisyphus from "@assets/logo/sisyphus.svg";
import Lighting from "@assets/logo/zap.svg";

import TrustedByCard from "@component/TrustedByCard.vue";

const logos = ref([
  {
    label: "Layers",
    icon: Layers,
  },
  {
    label: "Sisyphus",
    icon: Sisyphus,
  },
  {
    label: "Circooles",
    icon: Circooles,
  },
  {
    label: "Catalog",
    icon: Catalog,
  },
  {
    label: "Quotient",
    icon: Quotient,
  },
]);
</script>
