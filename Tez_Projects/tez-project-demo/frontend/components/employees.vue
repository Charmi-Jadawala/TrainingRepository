<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <div class="container mx-auto p-5 sm:p-10 md:p-16 relative">
    <TezLazy
      class="tezLazy mt-24"
      :sourcePath="data.dynamicSourcePath"
      v-slot="source"
    >
      <tez-iterator
        class="tezIterator flex flex-wrap gap-4 m-4"
        :items="source.items"
        v-slot="employee"
      >
        <div>
          <tez-link
            class="no-underline"
            :to="employee.slug"
            :title="employee.title"
          >
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">
              {{ employee.name }} <br />
            </h5>
          </tez-link>
          {{ employee.departments}}
          {{ employee.dOB }} <br />
          {{ employee.email }} <br />
        </div>
      </tez-iterator>
    </TezLazy>
  </div>
</template>