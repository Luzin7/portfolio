<template>
  <section
    id="home"
    class="bg-backgroundSecondary min-h-screen mx-auto flex flex-col justify-center"
  >
    <PresentationComponent />
    <ContactButton />
    <ScrollDownIcon />
  </section>
</template>

<script setup>
import ContactButton from './components/ContactButton/ContactButton.vue';
import PresentationComponent from './components/Presentation/PresentationComponent.vue';
import ScrollDownIcon from './components/ScrollDownIcon/ScrollDownIcon.vue';
</script>
