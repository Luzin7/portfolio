<template>
  <section class="bg-backgroundSecondary h-[40vh] flex flex-col justify-center">
    <carousel
      :items-to-show="1"
      wrapAround="true"
      class="w-full h-[40vh] overflow-hidden"
    >
      <slide v-for="project in projects" :key="project.name" class="h-[40vh]">
        <div class="h-full w-full relative">
          <img
            :src="project.media"
            class="w-full h-full object-cover blur-sm opacity-10"
          />
        </div>
        <div
          class="flex flex-col justify-center items-center absolute gap-4 cursor-default"
        >
          <h1 class="text-5xl font-bold text-center">
            {{ project.name }}
          </h1>
          <p class="text-center xl:w-2/4 font-medium cursor-default">
            {{ project.description }}
          </p>
          <a
            v-if="project.link !== null"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-accent py-2 px-7 rounded-md font-bold mt-4"
          >
            Confira
          </a>
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { projects } from './data/projects/projects';
</script>
