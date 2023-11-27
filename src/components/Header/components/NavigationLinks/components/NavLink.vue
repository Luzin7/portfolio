<template>
  <li
    class="hover:text-accent transition-colors cursor-pointer"
    :aria-label="`Vá para a seção ${text}`"
    @click="() => scrollToSection(sectionToScroll)"
  >
    {{ text }}
  </li>
</template>

<script setup>
import scrollToSection from '../../../../../utils/scrollToSection';

defineProps({
  sectionToScroll: String,
  text: String,
});
</script>
