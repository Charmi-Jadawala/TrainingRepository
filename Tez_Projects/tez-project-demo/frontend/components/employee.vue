<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <div class="container mt-24 mx-auto p-5 sm:p-10 md:p-16 relative">
    {{ data.name }}<br />
    {{ data.dOB }} <br />
    {{ data.email }} <br />
  </div>
</template>