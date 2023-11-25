<template>
  <div class="mx-auto mt-5">
    <button
      type="button"
      class="bg-accent py-3.5 px-9 rounded-md font-bold"
      @click="() => scrollToSection('contact')"
    >
      Entre em contato
    </button>
  </div>
</template>

<script setup>
import scrollToSection from '../../../../utils/scrollToSection';
</script>
