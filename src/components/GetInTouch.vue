<template>
  <section>
    <div class="h-28 bg-cover bg-left-top bg-[url('@assets/bg-1.svg')]"></div>

    <div class="bg-[#1c284a] py-10">
      <div class="container mx-auto">
        <p class="text-[#86D8FF] pt-10">Contact Us</p>
        <div class="grid grid-cols-12 gap-y-10 md:gap-x-4">
          <div class="col-span-12 md:col-span-6">
            <div class="text-left space-y-6">
              <h3 class="section-title text-white">Get in touch</h3>
              <p class="text-xl text-gray-200 leading-[30px]">
                Any question? Reach out to us and we’ll get back <br />
                to you shortly.
              </p>
            </div>

            <div class="flex flex-wrap gap-6 text-left mt-8">
              <div class="p-6 flex gap-6 bg-[#0000001A] rounded-lg">
                <div class="bg-[#792BFF] h-fit p-2 rounded-lg">
                  <img :src="Phone" alt="phone" />
                </div>

                <div class="space-y-1">
                  <p class="text-xl text-[#C7DAFF]">Call us</p>
                  <p class="text-sm text-[#E4E7EC]">Mon-Fri from 8am to 5pm.</p>
                  <p class="text-[#E4E7EC]">+1 (555) 000-0000</p>
                </div>
              </div>
              <div class="p-6 flex gap-6 bg-[#0000001A] rounded-lg">
                <div class="bg-[#792BFF] h-fit p-2 rounded-lg">
                  <img :src="Message" alt="Message" />
                </div>

                <div class="space-y-1">
                  <p class="text-xl text-[#C7DAFF]">Chat to support</p>
                  <p class="text-sm text-[#E4E7EC]">We’re here to help.</p>
                  <p class="text-[#E4E7EC]">support@wctpay.com</p>
                </div>
              </div>
            </div>

            <div
              class="p-6 flex gap-6 bg-[#0000001A] rounded-lg text-left mt-6"
            >
              <div class="bg-[#792BFF] h-fit p-2 rounded-lg">
                <img :src="MapPin" alt="MapPin" />
              </div>

              <div class="space-y-1">
                <p class="text-xl text-[#C7DAFF]">Visit us</p>
                <p class="text-sm text-[#E4E7EC]">Visit our office HQ.</p>
                <p class="text-[#E4E7EC]">
                  3/99 Racecourse Road, Ascot 4012, Queensland Australia
                </p>
              </div>
            </div>
          </div>

          <div class="col-span-12 md:col-span-6 text-left">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <div class="flex gap-6">
                  <div class="w-1/2">
                    <label
                      for="first-name"
                      class="block text-white font-medium mb-2"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="first-name"
                      v-model="form.firstName"
                      class="w-full px-4 py-2 border border-[#0D1929B2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#0D1929B2]"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <!-- Last Name -->
                  <div class="w-1/2">
                    <label
                      for="last-name"
                      class="block text-white font-medium mb-2"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="last-name"
                      v-model="form.lastName"
                      class="w-full px-4 py-2 border border-[#0D1929B2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#0D1929B2]"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="mb-4">
                <label for="email" class="block text-white font-medium mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-[#0D1929B2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#0D1929B2]"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <!-- Message -->
              <div class="mb-6">
                <label for="message" class="block text-white font-medium mb-2"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  class="w-full px-4 py-2 border border-[#0D1929B2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-[#0D1929B2]"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full px-14 rounded-full py-4 bg-[#5E65E0] text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="h-28 bg-cover bg-bottom bg-[url('@assets/bg-1.svg')]"></div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import Phone from "@assets/phone.svg";
import Message from "@assets/message-circle.svg";
import MapPin from "@assets/map-pin.svg";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
  // Handle form submission logic here
  // e.g., sending form data to an API
};
</script>
