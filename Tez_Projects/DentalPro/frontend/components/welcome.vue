<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section
    class="relative px-4 pt-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:pt-32"
  >
    <div class="flex flex-col lg:flex-row lg:-mx-8">
      <div class="w-full lg:w-1/2 lg:px-8">
        <h2 class="text-3xl leading-tight font-bold mt-4">{{ data.title }}</h2>
        <p class="text-lg mt-4 font-semibold">{{ data.subTitle }}</p>
        <p class="mt-2 leading-relaxed" v-html="data.longText"></p>
      </div>
      <tez-iterator
        :items="data.titleContentList"
        v-slot="treatments"
        class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0"
      >
        <div class="md:flex">
          <div>
            <div>
              <div class="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          <div class="md:ml-8 mt-4 md:mt-0 features">
            <h4 class="text-xl font-bold leading-tight">
              {{ treatments.title }}
            </h4>
            <p class="mt-2 mb-8 leading-relaxed" v-html="treatments.longText"></p>
          </div>
        </div>
      </tez-iterator>
    </div>
  </section>
</template>
