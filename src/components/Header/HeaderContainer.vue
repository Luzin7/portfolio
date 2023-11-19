<template>
  <header class="bg-backgroundSecondary h-[7vh] flex justify-end items-center">
    <NavigationLinks />
    <ContactLinks />
  </header>
</template>

<script setup>
import ContactLinks from './components/ContactLinks/ContactLinks.vue';
import NavigationLinks from './components/NavigationLinks/NavigationLinks.vue';
</script>
