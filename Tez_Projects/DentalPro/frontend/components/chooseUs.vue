<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section
    class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
  >
    <section>
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold mt-4">
            {{ data.title }}
          </h2>
          <p class="mt-2 leading-relaxed">
            {{ data.subTitle }}
          </p>
        </div>

        <div
          class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0"
        >
          <div>
            <img
              v-tez-src="data.image.url"
              :alt="data.image.alternativeText"
              class="w-full h-72 rounded-lg"
            />
          </div>
          <p
            class="italic text-sm mt-2 text-center"
            v-html="$md.render(data.shortText)"
          ></p>
        </div>
      </div>
    </section>
  </section>
</template>
