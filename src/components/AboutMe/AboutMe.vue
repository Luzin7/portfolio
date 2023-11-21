<template>
  <section
    class="bg-backgroundDefault min-h-[43vh] flex flex-col items-center justify-center"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <AboutMeParagraph />
        <MyCoreSkills />
      </div>
    </div>
  </section>
  <section
    class="bg-backgroundDefault min-h-[20vh] flex flex-col items-center justify-center"
  >
    <div class="container">
      <h3 class="text-center font-bold text-4xl mb-4">Línguas</h3>
      <div class="lg:w-2/5 xl:w-1/4 mx-auto flex justify-evenly">
        <Icon
          icon="twemoji:flag-united-states"
          class="bg-backgroundSecondary border border-primary p-2 rounded-md text-5xl lg:text-7xl"
        />
        <Icon
          icon="twemoji:flag-brazil"
          class="bg-backgroundSecondary border border-primary p-2 rounded-md text-6xl lg:text-8xl"
        />
        <Icon
          icon="twemoji:flag-france"
          class="bg-backgroundSecondary border border-primary p-2 rounded-md text-5xl lg:text-7xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutMeParagraph from './components/AboutMeParagraph/AboutMeParagraph.vue';
import { Icon } from '@iconify/vue';
import MyCoreSkills from './components/MyCoreSkills/MyCoreSkills.vue';
</script>
