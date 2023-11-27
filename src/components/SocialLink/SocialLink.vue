<template>
  <li>
    <a
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-accent transition-colors"
      :aria-label="`Acesse
      meu
      perfil
      no
      ${socialName}`"
    >
      <Icon :icon="icon" class="text-4xl xl:text-3xl" />
    </a>
  </li>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  href: String,
  icon: String,
  socialName: String,
});
</script>
