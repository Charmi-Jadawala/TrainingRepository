<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-14">
    <div class="container mx-auto">
      <div class="lg:flex justify-center">
        <div class="lg:w-2/3 mx-2">
          <div class="text-center">
            <h1
              class="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10"
            >
              {{ data.title }}
            </h1>
            <p class="text-base text-gray-400">{{ data.subTitle }}</p>
            <h4
              class="text-black mt-8 font-semibold"
              v-if="data.longText"
              v-html="data.longText"
            ></h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>