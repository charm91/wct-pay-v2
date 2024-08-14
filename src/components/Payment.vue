<template>
  <section class="py-10 bg-white">
    <div class="container mx-auto text-center">
      <div class="text-left space-y-8">
        <p class="text-primary-600 font-bold">Payments Enabled</p>
        <h3 class="section-title text-gray-900">
          Enabling Merchants with <br />
          Seamless Crypto Payment Solutions
        </h3>
        <p
          class="text-lg md:text-xl text-gray-500 leading-[30px] w-full sm:w-3/5"
        >
          At WCT Pay, we offer merchants a comprehensive suite of services
          designed to streamline and simplify the process of accepting
          cryptocurrency payments.
        </p>
      </div>

      <div class="grid grid-cols-12 gap-y-10 md:gap-x-10 mt-14">
        <div
          class="col-span-12 md:col-span-4"
          v-for="card in cards"
          :key="card.title"
        >
          <PaymentCard :img="card.img" :title="card.title" :desc="card.desc" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import PaymentCard from "@component/PaymentCard.vue";
import Advance from "@assets/advance-technology.jpg";
import Crypto from "@assets/crypto-payment.jpg";
import Settlement from "@assets/settlement.png";

const cards = ref([
  {
    img: Advance,
    title: "Advanced Technology",
    desc: "Our solutions include the tools, technology and support, as well as compliance with financial and payments industry regulations.",
  },
  {
    img: Crypto,
    title: "Accepting Crypto Payments",
    desc: "WCT Pay helps merchants easily accept cryptocurrency payments worldwide and supports a variety of digital currencies for flexible customer options.",
  },
  {
    img: Settlement,
    title: "Customizable Settlement Options",
    desc: "Global multi-currency settlement to any bank account for quick access. WCT Pay provides customizable options for efficient payment management.",
  },
]);
</script>
