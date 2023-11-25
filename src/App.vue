<script setup>
import AboutMe from './components/AboutMe/AboutMe.vue';
import HeaderContainer from './components/Header/HeaderContainer.vue';
import FooterContainer from './components/Footer/FooterContainer.vue';
import HeroContainer from './components/Hero/HeroContainer.vue';
import MyProjects from './components/Projects/MyProjects.vue';
import ContactForm from './components/ContactForm/ContactForm.vue';
</script>

<template>
  <HeaderContainer />
  <main>
    <HeroContainer />
    <AboutMe />
    <MyProjects />
    <ContactForm />
  </main>
  <FooterContainer />
</template>
