<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full">
          <img
            v-tez-src="data.image.url"
            :width="data.image.width"
            :height="data.image.height"
            :alt="data.image.alternativeText"
            class="border rounded p-1 bg-gray-50"
          />
        </div>
      </div>
    </div>
  </section>
</template>