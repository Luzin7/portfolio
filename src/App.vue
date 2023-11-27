<script setup>
import { defineAsyncComponent } from 'vue';

const AboutMe = defineAsyncComponent(
  () => import('./components/AboutMe/AboutMe.vue'),
);
const HeaderContainer = defineAsyncComponent(
  () => import('./components/Header/HeaderContainer.vue'),
);
const FooterContainer = defineAsyncComponent(
  () => import('./components/Footer/FooterContainer.vue'),
);
const HeroContainer = defineAsyncComponent(
  () => import('./components/Hero/HeroContainer.vue'),
);
const MyProjects = defineAsyncComponent(
  () => import('./components/Projects/MyProjects.vue'),
);
const ContactForm = defineAsyncComponent(
  () => import('./components/ContactForm/ContactForm.vue'),
);
</script>

<template>
  <HeaderContainer />
  <main>
    <HeroContainer />
    <AboutMe />
    <MyProjects />
    <ContactForm />
  </main>
  <FooterContainer class="max-sm:pb-12" />
</template>
