<template>
  <section
    id="home"
    class="bg-background min-h-screen max-w-[90%] mx-auto flex flex-col justify-center gap-8"
  >
    <PresentationComponent />
    <ContactButton />
    <!-- <ScrollDownIcon /> -->
  </section>
</template>

<script setup>
import ContactButton from './components/ContactButton/ContactButton.vue';
import PresentationComponent from './components/Presentation/PresentationComponent.vue';
// import ScrollDownIcon from './components/ScrollDownIcon/ScrollDownIcon.vue';
</script>
