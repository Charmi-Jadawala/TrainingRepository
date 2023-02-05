<script>
import axios from "axios";

export default {
  data() {
    return {
      filteredData: [],
      selected: 'all',
    };
  },
  props: ["data"],
  methods: {
    async getAllData(event, selected) {
      const self = this;
      self.selected = selected;
      const response = await axios.get(
        `http://localhost:1339/api/image-galleries?populate=*`
      );
      this.filteredData = response.data.data;
    },
    async getDataByCategory(event, cname) {
      const self = this;
      self.selected = cname;
      const response = await axios.get(
        `http://localhost:1339/api/image-galleries?populate=*&filters[category][name][$eq]=${cname}`
      );
      this.filteredData = response.data.data;
    },
  },
  async created() {
    this.getAllData(event,this.selected);
  },
};
</script>
<template>
  <div>
    <section class="section">
      <div class="container mx-auto">
        <TezLazy :sourcePath="data.dynamicSourcePath" v-slot="source">
          <div class="flex justify-center">
            <div class="w-full filters-group-wrap mb-3">
              <div class="flex justify-center mb-5">
                <ul class="filter-options flex flex-wrap gap-4 justify-center">
                  <li>
                    <button
                      type="button"
                      @click="getAllData($event, 'all')"
                      :class="{ active: selected === 'all' }"
                    >
                      All
                    </button>
                  </li>
                  <li :key="index" v-for="(category, index) in source.items">
                    <button
                      type="button"
                      :class="{ active: selected === category.name }"
                      @click="getDataByCategory($event, category.name)"
                    >
                      {{ category.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="grid"
            class="columns-1 md:columns-2 lg:columns-3 mx-8"
          >
            <div
              class="p-1 mb-3"
              :key="index"
              v-for="(item, index) in filteredData"
            >
              <div
                class="relative block overflow-hidden rounded group transition-all duration-500"
              >
                <img
                  :src="item.attributes.Image.data.attributes.url"
                  :alt="item.attributes.Image.data.alternativeText"
                  class="rounded transition-all duration-500 group-hover:scale-105"
                />

                <a
                  href="javascript:void(0)"
                  class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80"
                >
                  <div>
                    <p class="text-sm text-gray-400">
                      {{ item.attributes.SubTitle }}
                    </p>
                    <h6 class="text-base text-black font-medium">
                      {{ item.attributes.Title }}
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </TezLazy>
        <div class="flex justify-center my-8">
          <a
            href="#"
            class="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white"
            >More Works</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.filter-options li.active button,
.filter-options li:active button,
.filter-options li:focus button,
.filter-options li:hover button,
.active {
  background-color: rgb(59 130 246/0.25);
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.filter-options li button {
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 7px 0.75rem;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
}
</style>
