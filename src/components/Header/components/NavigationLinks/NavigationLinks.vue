<template>
  <nav>
    <ul class="flex gap-7">
      <NavLink sectionToScroll="home" text="Início" />
      <NavLink sectionToScroll="about_me" text="Sobre mim" />
      <NavLink sectionToScroll="projects" text="Projetos" />
      <NavLink sectionToScroll="contact" text="Contato" />
    </ul>
  </nav>
</template>

<script setup>
import NavLink from './components/NavLink.vue';
</script>
