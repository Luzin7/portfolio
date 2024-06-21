<template>
  <section
    id="projects"
    class="bg-backgroundSecondary flex flex-col justify-center cursor-grab"
  >
  <carousel
  :items-to-show="1"
  :wrapAround="true"
  class=" rounded-lg"
  >
  <slide v-for="project in projects" :key="project.name" class="h-[40vh]">
    <div v-if="project.media !== null" class="h-full w-full relative">
      <img
      :src="project.media"
      class="w-full h-full object-cover blur-sm opacity-10"
      loading="lazy"
      :alt="`project ${project.name} screenshot`"
      />
      </div>
      <div
      class="flex flex-col justify-center items-center absolute gap-4 cursor-default"
      >
      <p class="text-sm font-medium leading-none pb-2 text-textSecondary opacity-50">{{ project.type }}</p>
          <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {{ project.name }}
          </h1>
          <p
            class="max-sm:text-sm text-center max-sm:w-3/4 xl:w-2/4 leading-7  cursor-default"
          >
            {{ project.description }}
          </p>
          <a
            v-if="project.link !== null"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary hover:bg-accent py-2 px-7 rounded-md font-bold mt-4 transition-all"
            :aria-label="`Link para acessar o projeto ${project.name}. Confira`"
          >
            Confira
          </a>
        </div>
      </slide>
      <template #addons>
        <navigation aria-label="Botão de navegação do carrossel"/>
      </template>
    </carousel>
  </section>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { projects } from './data/projects/projects';
</script>
