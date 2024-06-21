<template>
  <li
    class="hover:text-primary transition-colors cursor-pointer"
    :aria-label="`Vá para a seção ${text}`"
    @click="() => scrollToSection(sectionToScroll)"
  >
    <button type="button" class="hover:bg-transparent">
      {{ text }}
    </button>
  </li>
</template>

<script setup>
import scrollToSection from '../../../../../utils/scrollToSection';

defineProps({
  sectionToScroll: String,
  text: String,
});
</script>
