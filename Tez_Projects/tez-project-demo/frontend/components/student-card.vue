<script setup lang="ts">
defineProps<{ article: any }>();
</script>
<template>
  <div class="w-full shadow-lg hover:shadow-2xl transition-all delay-100 ease-in rounded-md px-4 h-full mt-14">
    <div class="card px-4 py-8 flex flex-wrap h-full">
        <div class="h-[300px] overflow-hidden">
          {{article}}--------------
         
        </div>
      <div
        class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
      >
        <div>
          <div
            class="mb-4 inline-block"
           
      
          >
           {{ article.name }}
          </div>

       
            <h5
              class="mb-2 text-2xl font-semibold tracking-tight text-black"
            >
              {{ article.name }}
            </h5>
     
         
        </div>
      </div>
     
    </div>
  </div>
</template>
