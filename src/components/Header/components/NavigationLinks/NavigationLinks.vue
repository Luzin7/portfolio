<template>
  <nav>
    <ul class="flex gap-7">
      <li
        class="hover:text-accent transition-colors cursor-pointer"
        @click="() => scrollToSection('home')"
      >
        Início
      </li>
      <li
        class="hover:text-accent transition-colors cursor-pointer"
        @click="() => scrollToSection('about_me')"
      >
        Sobre mim
      </li>
      <li
        class="hover:text-accent transition-colors cursor-pointer"
        @click="() => scrollToSection('projects')"
      >
        Projetos
      </li>
      <li
        class="hover:text-accent transition-colors cursor-pointer"
        @click="() => scrollToSection('contact')"
      >
        Contato
      </li>
    </ul>
  </nav>
</template>

<script setup>
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
