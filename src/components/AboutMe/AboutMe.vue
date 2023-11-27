<template>
  <section
    id="about_me"
    class="bg-backgroundDefault max-sm:py-7 min-h-[73vh] flex flex-col items-center justify-center"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <AboutMeParagraph />
        <MyCoreSkills />
      </div>
    </div>
  </section>
  <section class="bg-backgroundDefault min-h-[30vh] flex flex-col items-center">
    <div class="container">
      <h3 class="text-center font-bold text-4xl mb-4">Línguas</h3>
      <div class="lg:w-2/5 xl:w-1/4 mx-auto flex justify-evenly">
        <CountryFlagIcons />
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutMeParagraph from './components/AboutMeParagraph/AboutMeParagraph.vue';
import CountryFlagIcons from './components/CountryFlagIcons/CountryFlagIcons.vue';
import MyCoreSkills from './components/MyCoreSkills/MyCoreSkills.vue';
</script>
