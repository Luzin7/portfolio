<template>
  <header
    class="bg-backgroundSecondary max-md:bottom-0 flex items-center justify-center w-full h-[7vh] md:justify-end fixed z-10"
  >
    <NavigationLinks />
    <ContactLinks />
  </header>
</template>

<script setup>
import ContactLinks from './components/ContactLinks/ContactLinks.vue';
import NavigationLinks from './components/NavigationLinks/NavigationLinks.vue';
</script>
