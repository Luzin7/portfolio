<template>
  <section
    class="bg-backgroundDefault min-h-[93vh] flex flex-col items-center justify-center"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <AboutMeParagraph />
        <MyCoreSkills />
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutMeParagraph from './components/AboutMeParagraph/AboutMeParagraph.vue';
import MyCoreSkills from './components/MyCoreSkills/MyCoreSkills.vue';
</script>
