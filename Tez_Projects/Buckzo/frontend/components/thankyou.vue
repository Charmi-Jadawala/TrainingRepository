<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-14">
    <div class="container flex mx-auto h-[60vh] items-center justify-center">
      <div class="lg:w-2/3 mx-2">
        <div class="text-center">
          <h1
            class="text-[40px] font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10"
          >
            Thank you for sharing your requirements with us!
          </h1>
          <p class="text-base text-[18px] text-gray-400">
            We have successfully received your message, and our executive will
            connect with you within 48 business working hours.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>