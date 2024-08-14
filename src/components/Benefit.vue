<template>
  <section>
    <div
      class="h-28 bg-cover bg-left-top bg-[url('@assets/darkSection.svg')]"
    ></div>

    <div class="bg-[#222426] py-10">
      <div class="container mx-auto text-center">
        <div class="text-left space-y-8">
          <p class="text-primary-300">Benefit Your Business</p>
          <h3 class="section-title text-white">
            What are the Benefits of Crypto Payments?
          </h3>
          <p
            class="text-lg sm:text-xl text-gray-200 leading-[30px] w-full sm:w-3/5"
          >
            Whether you are a payment service provider, or a merchant, accepting
            crypto payments unlocks a wide range of benefits.
          </p>
        </div>

        <div class="grid grid-cols-12 mt-10">
          <div
            v-for="(card, index) in cards"
            :key="card.title"
            class="col-span-12 md:col-span-4 flex items-center gap-4 p-10 text-left border-opacity-50 border-[#FBFBFB21] border-b-0"
            :class="{
              'border-r':
                (index + 1) % 3 !== 0 &&
                index !== cards.length - 1 &&
                cards.length % 3 === 0,
              'md:border-r':
                (index + 1) % 3 !== 0 && index !== cards.length - 1,
              'md:border-b': index < 3,
            }"
          >
            <img :src="card.icon" />
            <div>
              <p class="text-primary-300 text-lg">{{ card.title }}</p>
              <p class="text-gray-300 mt-2">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-28 bg-cover bg-right-bottom bg-[url('@assets/darkSection.svg')]"
    ></div>
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
