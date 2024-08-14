<template>
  <carousel :items-to-show="1" autoplay="5000" transition="1000" wrapAround>
    <slide :key="1">
      <HeroCard :img="Image">
        <template v-slot:title>
          Bringing <br />
          Cryptocurrency <br />
          Payments To <br />
          Merchants Globally.
        </template>
        <template v-slot:subtitle>
          WCT Pay enables merchants to accept cryptocurrency <br />
          globally with our secure, user-friendly platform, unlocking new
          <br />
          customer and revenue opportunities.
        </template>
      </HeroCard>
    </slide>

    <slide :key="2">
      <HeroCard :img="Image">
        <template v-slot:title> Second Page </template>
        <template v-slot:subtitle>
          WCT Pay enables merchants to accept cryptocurrency <br />
          globally with our secure, user-friendly platform, unlocking new
          <br />
          customer and revenue opportunities.
        </template>
      </HeroCard>
    </slide>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import Image from "@src/assets/dashboard.png";
import HeroCard from "./HeroCard.vue";
</script>
