<template>
  <div>
    <ul class="flex gap-7 border-l px-7 ml-7">
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent transition-colors"
          ><Icon icon="mdi:linkedin" class="text-4xl xl:text-3xl"
        /></a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent transition-colors"
          ><Icon icon="mdi:github" class="text-4xl xl:text-3xl"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
