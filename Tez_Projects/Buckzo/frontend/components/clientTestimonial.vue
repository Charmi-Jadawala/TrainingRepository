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
      <div class="flex justify-center">
        <div class="lg:w-2/3 text-center">
          <div class="block justify-center mt-14">
            <h1 class="text-4xl">
              <tez-iterator :items="data.otherMedias" v-slot="otherMedia">
                <img
                  v-tez-src="otherMedia.url"
                  :alt="otherMedia.alternativeText"
                  height="36"
                  width="36"
                  class="mx-auto"
                />
              </tez-iterator>
            </h1>
            <h4 class="font-light italic text-base" v-html="data.subTitle"></h4>
            <img
              v-tez-src="data.image.url"
              alt="testimonial-user"
              class="h-16 w-16 mx-auto rounded-full mt-4 mb-2.5"
            />
            <p>{{ data.shortText }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


