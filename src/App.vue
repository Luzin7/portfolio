<script setup>
import { defineAsyncComponent } from "vue";
import AboutMe from "./components/AboutMe/AboutMe.vue";
// import HeaderContainer from './components/Header/HeaderContainer.vue';
import HeroContainer from "./components/Hero/HeroContainer.vue";
const FooterContainer = defineAsyncComponent(
  () => import("./components/Footer/FooterContainer.vue"),
);
// const MyProjects = defineAsyncComponent(
//   () => import('./components/Projects/MyProjects.vue'),
// );
// const ContactForm = defineAsyncComponent(
//   () => import('./components/ContactForm/ContactForm.vue'),
// );
</script>

<template>
  <!-- <HeaderContainer /> -->
  <main class="container mx-auto">
    <HeroContainer />
    <AboutMe />

    <!-- <MyProjects />  -->
    <!-- <ContactForm /> -->
  </main>
  <FooterContainer class="max-sm:pb-12" />
</template>
