<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section
    class="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left"
  >
    <div class="md:flex md:items-center md:justify-center gap-2">
      <h2 class="text-xl font-bold text-white">
        {{ data.title }}
      </h2>
      <h2 class="text-xl font-bold text-white" v-html="data.longText"></h2>
      <div
        class="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0"
        v-html="$md.render(data.cTA)"
      ></div>
    </div>
  </section>
</template>
<style scoped>
.bg-blue-teal-gradient {
  background: rgb(49, 130, 206);
  background: linear-gradient(
    90deg,
    rgba(49, 130, 206, 1) 0%,
    rgba(56, 178, 172, 1) 100%
  );
}
</style>