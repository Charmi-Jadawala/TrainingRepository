<script setup lang="ts">
import { ref } from "vue";
defineProps<{ data: any }>();
</script>
<template>
  <section class="section py-10">
    <div class="container mx-auto">
      <TezLazy
        :sourcePath="data.dynamicSourcePath"
        v-slot="source"
        class="grid lg:grid-cols-3 gap-6"
      >
        <div class="col-span-2">
          <div class="prose max-w-full">
            <tez-iterator :items="source.items" v-slot="blog">
              <div>
                <tez-link to="#" :title="blog.title"
                  ><img
                    v-tez-src="blog.image.url"
                    :alt="blog.image.alternativeText"
                    class="rounded"
                    height="360"
                /></tez-link>
              </div>

              <div>
                <h2>
                  <tez-link :to="blog.navURL" :title="blog.title">{{
                    blog.title
                  }}</tez-link>
                </h2>
                <div class="flex space-x-6">
                  <div>
                    <img
                      width="17"
                      src="@icon/icofont/icons/ui-calendar.svg"
                      class="inline-block mx-auto my-auto"
                    />&nbsp;&nbsp;{{ blog.createdDate }}
                  </div>
                  <div>
                    <img
                      width="17"
                      src="@icon/icofont/icons/tags.svg"
                      class="inline-block mx-auto my-auto"
                    />&nbsp;&nbsp; <a href="#">Branding</a>,
                    <a href="#">Design</a>
                  </div>
                  <div>
                    <img
                      width="17"
                      src="@icon/icofont/icons/comment.svg"
                      class="inline-block mx-auto my-auto"
                    />&nbsp;&nbsp;
                    <a href="#">3 Comments</a>
                  </div>
                </div>
              </div>

              <div>
                <p v-html="blog.longText"></p>
              </div>

              <tez-link :to="blog.navURL" :title="blog.title"
                >Read More</tez-link
              >
            </tez-iterator>
          </div>
          <!-- Pagination-->
          <div class="flex mt-6">
            <a
              href="#"
              class="flex items-centzer justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white border rounded cursor-not-allowed"
            >
              <img
                width="17"
                src="@icon/icofont/icons/rounded-left.svg"
                class="inline-block mx-auto my-auto"
              />
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 transition-colors duration-200 transform border rounded sm:inline bg-gray-600 text-white"
            >
              1
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
            >
              2
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
            >
              3
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
            >
              4
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
            >
              5
            </a>

            <a
              href="#"
              class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded hover:bg-gray-600 hover:text-white"
            >
              <img
                width="17"
                src="@icon/icofont/icons/rounded-right.svg"
                class="inline-block mx-auto my-auto"
              />
            </a>
          </div>
          <!-- Pagination end-->
        </div>

        <div class="lg:ml-8 ml-0 mt-8">
          <!-- Search widget-->
          <div class="flex bg-transparent border items-center pr-4 mb-10">
            <!-- search input -->
            <input
              type="search"
              class="border-0 focus:border-0 focus:ring-0 text-black bg-transparent w-full p-2"
              placeholder="Search"
            />
            <button type="submit" class="text-xl text-black">
              <img
                width="17"
                src="@icon/icofont/icons/search-1.svg"
                class="inline-block mx-auto my-auto"
              />
            </button>
          </div>

          <!-- Categories widget-->
          <aside class="mb-10">
            <div class="text-base font-medium">Categories</div>
            <div class="relative flex items-center my-5">
              <div
                class="h-px bg-gray-200 w-full absolute rounded-l-full"
              ></div>
              <div class="h-px bg-blue-700 w-8 absolute rounded-full"></div>
            </div>
            <div class="space-y-5">
              <div><a href="#">Journey</a> (40)</div>
              <div><a href="#">Photography</a> (08)</div>
              <div><a href="#">Lifestyle</a> (11)</div>
              <div><a href="#">Food &amp; Drinks</a> (21)</div>
            </div>
          </aside>

          <!-- Recent entries widget-->
          <aside class="mb-10">
            <div class="text-base font-medium">Popular Posts</div>
            <div class="relative flex items-center my-5">
              <div
                class="h-px bg-gray-200 w-full absolute rounded-l-full"
              ></div>
              <div class="h-px bg-blue-700 w-8 absolute rounded-full"></div>
            </div>
            <div>
              <div class="flex border-b mb-4 pb-4">
                <div class="mt-0.5 ml-4">
                  <a href="#">Beautiful Day With Friends..</a>
                  <span>Feb 15, 2020</span>
                </div>
              </div>

              <div class="flex border-b mb-4 pb-4">
                <div class="mt-0.5 ml-4">
                  <a href="#">Nature valley with cooling..</a>
                  <span>Feb 10, 2020</span>
                </div>
              </div>

              <div class="flex">
                <div class="mt-0.5 ml-4">
                  <a href="#">15 Best Healthy and Easy Salad..</a>
                  <span>Feb 8, 2020</span>
                </div>
              </div>
            </div>
          </aside>

          <!-- Text widget-->
          <aside class="mb-10">
            <div class="text-base font-medium">Text Widget</div>
            <div class="relative flex items-center my-5">
              <div
                class="h-px bg-gray-200 w-full absolute rounded-l-full"
              ></div>
              <div class="h-px bg-blue-700 w-8 absolute rounded-full"></div>
            </div>

            <p class="text-muted text-widget-des">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag.
            </p>
          </aside>

          <!-- Archives widget-->
          <aside class="mb-10">
            <div class="text-base font-medium">Archives</div>
            <div class="relative flex items-center my-5">
              <div
                class="h-px bg-gray-200 w-full absolute rounded-l-full"
              ></div>
              <div class="h-px bg-blue-700 w-8 absolute rounded-full"></div>
            </div>

            <div class="space-y-5">
              <div><a href="#">March 2020</a> (40)</div>
              <div><a href="#">April 2020</a> (08)</div>
              <div><a href="#">May 2020</a> (11)</div>
              <div><a href="#">Feb 2020</a> (21)</div>
            </div>
          </aside>

          <!-- Tags widget-->
          <aside class="mb-10">
            <div class="text-base font-medium">Tags</div>
            <div class="relative flex items-center my-5">
              <div
                class="h-px bg-gray-200 w-full absolute rounded-l-full"
              ></div>
              <div class="h-px bg-blue-700 w-8 absolute rounded-full"></div>
            </div>
            <div class="flex flex-wrap gap-2">
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >logo</a
              >
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >business</a
              >
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >corporate</a
              >
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >e-commerce</a
              >
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >agency</a
              >
              <a
                class="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                href="#"
                >responsive</a
              >
            </div>
          </aside>
        </div>
      </TezLazy>
    </div>
  </section>
</template>
