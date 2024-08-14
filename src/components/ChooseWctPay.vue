<template>
  <section>
    <div class="h-28 bg-cover bg-left-top bg-[url('@assets/bg-1.svg')]"></div>

    <div class="bg-[#1c284a] py-10">
      <div class="container mx-auto text-center">
        <div class="text-left space-y-8">
          <p class="text-primary-300">Choose Wisely</p>
          <div class="flex items-center gap-4">
            <p class="section-title text-white">Why Choose</p>
            <img src="@assets/logo-light.svg" alt="logo" />
          </div>
          <p
            class="text-lg sm:text-xl text-gray-200 leading-[30px] w-full md:w-3/5"
          >
            Founded in 2008 and managed by leading payments, finance, tech and
            blockchain professionals, WCT Pay’s crypto payment platform
            seamlessly integrates via API and offers fast settlement, low fees
            and access to a global market.
          </p>
        </div>

        <div class="grid grid-cols-12 gap-y-8 md:gap-8 mt-10">
          <div
            class="col-span-12 sm:col-span-6 md:col-span-4"
            v-for="card in cards"
            :key="card.title"
          >
            <ChooseWctPayCard
              :icon="card.icon"
              :title="card.title"
              :desc="card.desc"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="h-28 bg-cover bg-bottom bg-[url('@assets/bg-1.svg')]"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ChooseWctPayCard from "@component/ChooseWctPayCard.vue";
import Expertise from "@assets/logo/expertise.svg";
import Efficiency from "@assets/logo/efficiency.svg";
import GlobalMarket from "@assets/logo/global-market.svg";
import ZeroRisk from "@assets/logo/zero-risk.svg";
import Support from "@assets/logo/support.svg";
import Connect from "@assets/logo/connect.svg";

const cards = ref([
  {
    icon: Expertise,
    title: "Expertise",
    desc: "WCT Pay is managed by industry-leading experts.",
  },
  {
    icon: Efficiency,
    title: "Efficiency",
    desc: "WCT Pay offers lightning-fast cryptocurrency payments.",
  },
  {
    icon: GlobalMarket,
    title: "Global Market",
    desc: "Cryptocurrency is borderless, giving you access to a global market.",
  },
  {
    icon: ZeroRisk,
    title: "Zero Risk",
    desc: "Instant crypto conversion ensures you have zero exposure to market volatility.",
  },
  {
    icon: Support,
    title: "Support",
    desc: "Enjoy white glove service from a dedicated account manager.",
  },
  {
    icon: Connect,
    title: "Innovation",
    desc: "Stay ahead with WCT Pay as we continually innovate and add new features.",
  },
]);
</script>
