<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-10">
    <div class="container mx-auto">
      <div class="flex" v-if="data.subTitle">
        <div class="w-full flex justify-center">
          <div class="text-4xl text-black border-b-[3px] border-black">
            {{ data.subTitle }}
          </div>
        </div>
      </div>
      <tez-iterator
        class="grid lg:grid-cols-4 gap-10 mt-16"
        :items="data.titleContentMediaList"
        v-slot="client"
      >
        <div>
          <img
            v-tez-src="client.image.url"
            :alt="client.image.alternativeText"
            class="opacity-70 hover:opacity-100 transition-all mx-auto block"
            height="46"
          />
        </div>
      </tez-iterator>
    </div>
  </section>
</template>

