<script setup>
import { defineAsyncComponent } from "vue";
import AboutMe from "./components/AboutMe/AboutMe.vue";
import HeroContainer from "./components/Hero/HeroContainer.vue";
const FooterContainer = defineAsyncComponent(
  () => import("./components/Footer/FooterContainer.vue"),
);
const MyProjects = defineAsyncComponent(
  () => import("./components/Projects/MyProjects.vue"),
);
</script>

<template>
  <main class="container mx-auto">
    <HeroContainer />
    <MyProjects />

    <AboutMe />
  </main>
  <FooterContainer class="max-sm:pb-12" />
</template>
