<template>
  <header
    class="bg-backgroundSecondary h-[7vh] w-full flex justify-end items-center fixed z-10"
  >
    <NavigationLinks />
    <ContactLinks />
  </header>
</template>

<script setup>
import ContactLinks from './components/ContactLinks/ContactLinks.vue';
import NavigationLinks from './components/NavigationLinks/NavigationLinks.vue';
</script>
