<script setup>
import { onMounted } from "vue";
import BannerGradient from "./components/BannerGradient.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import TrustedBy from "./components/TrustedBy.vue";
import ChooseWctPay from "./components/ChooseWctPay.vue";
import Payment from "./components/Payment.vue";
import Benefit from "./components/Benefit.vue";
import BeTransformed from "./components/BeTransformed.vue";
import GetInTouch from "./components/GetInTouch.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  document.title = "Wct | Pay";
});
</script>

<template>
  <div>
    <BannerGradient>
      <Header />
      <Hero />
    </BannerGradient>

    <main>
      <TrustedBy />

      <ChooseWctPay />

      <Payment />

      <Benefit />

      <BeTransformed />

      <GetInTouch />

      <Footer />
    </main>
  </div>
</template>
