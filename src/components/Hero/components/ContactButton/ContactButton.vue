<template>
  <div class="mx-auto">
    <button
      type="button"
      class="bg-accent py-4 px-5 rounded-xl font-medium"
      @click="() => scrollToSection('contact')"
    >
      Entre em contato
    </button>
  </div>
</template>

<script setup>
import scrollToSection from '../../../../utils/scrollToSection';
</script>
