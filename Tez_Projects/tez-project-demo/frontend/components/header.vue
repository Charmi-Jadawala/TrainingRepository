<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <TezLazy
    class="fixed top-0 bg-white w-full shadow-md z-50"
    :sourcePath="data.dynamicSourcePath"
    v-slot="source"
  >
    <header class="container mx-auto bg-white border-gray-200 py-2.5">
      <nav>
        <div class="flex flex-wrap justify-between items-center">
          <tez-link
            to="/"
            title="Discover India"
            class="flex items-center font-bold text-2xl"
            >Discover India</tez-link
          >
          <input
            id="toggle"
            data-collapse-toggle="navbar-default"
            type="checkbox"
            class="group inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 toggle-menu invisible"
            aria-controls="navbar-default"
            aria-expanded="false"
          />
          <label for="toggle" class="inline-flex md:hidden">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </label>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="flex flex-col p-4 mt-4 bg-gray-50 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
            >
              <li>
                <tez-link
                  v-bind:key="dept.slug"
                  :to="dept.slug"
                  v-for="dept in source.items"
                  class="block md:inline-block my-1 text-sm leading-5 text-gray-900 transition-colors duration-200 transform hover:text-indigo-600 md:mx-4 md:my-0 no-underline"
                >
                  {{ dept.name }}</tez-link
                >
              </li>
              <li class="!ml-0">
                <tez-link
                  to="/about-tezjs"
                  title="About TezJS"
                  class="block md:inline-block my-1 text-sm leading-5 text-gray-900 transition-colors duration-200 transform hover:text-indigo-600 md:mx-2 md:my-0 no-underline"
                >
                  About TezJS
                </tez-link>
              </li>
              <li class="!ml-0">
                <tez-link
                  to="/employee-details"
                  title="Employee Details"
                  class="block md:inline-block my-1 text-sm leading-5 text-gray-900 transition-colors duration-200 transform hover:text-indigo-600 md:mx-2 md:my-0 no-underline"
                >
                  Employee Details
                </tez-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </TezLazy>
</template>
<style lang="css">
.toggle-menu:checked ~ div {
  display: block !important;
}
</style>