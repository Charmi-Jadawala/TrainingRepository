<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-10">
    <div class="container mx-auto">
      <tez-iterator
        class="grid lg:grid-cols-3 gap-8 text-center"
        :items="data.titleContentMediaList"
        v-slot="feature"
      >
        <div>
          <div class="p-5">
            <div>
              <img
                v-tez-src="feature.image.url"
                :alt="feature.image.alternativeText"
                class="mx-auto"
                width="48"
              />
            </div>
            <h4 class="uppercase text-base my-3">{{ feature.title }}</h4>
            <p class="text-muted" v-html="feature.longText"></p>
          </div>
        </div>
      </tez-iterator>
    </div>
  </section>
</template>