<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section
    class="relative px-4 pb-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:pb-32"
  >
    <tez-iterator
      :items="data.titleContentMediaList"
      v-slot="treatments"
      class="gap-8 md:flex md:flex-wrap mt-24 text-center md:-mx-4"
    >
      <div class="bg-white rounded-lg border border-gray-300 p-8">
        <img
          v-tez-src="treatments.image.url"
          :width="treatments.image.width"
          :height="treatments.image.height"
          :alt="treatments.image.alternativeText"
          class="h-20 mx-auto"
        />
        <h4 class="text-xl font-bold mt-4">{{ treatments.title }}</h4>
        <p class="mt-1">{{ treatments.shortText }}</p>
        <a href="#" class="block mt-4">{{ treatments.cTA }}</a>
      </div>
    </tez-iterator>
  </section>
</template>
