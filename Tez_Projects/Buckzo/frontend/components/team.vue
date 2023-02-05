<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-10">
    <div class="container mx-auto">
      <div class="flex">
        <div class="w-full flex justify-center">
          <div class="text-4xl text-black border-b-[3px] border-black">
            {{ data.title }}
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-4 mt-14">
        <div
          class="text-center p-8"
          v-for="{ title, subTitle, media } in data.teams"
          :key="title"
        >
          <img
            v-tez-src="media.url"
            :alt="media.alternativeText"
            class="rounded mb-4 mx-auto"
            height="304"
            width="320"
          />
          <h4 class="text-lg font-medium mb-1">{{ title }}</h4>
          <h6 class="text-xs text-gray-400">{{ subTitle }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>
