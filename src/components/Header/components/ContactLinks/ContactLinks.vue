<template>
  <div class="max-md:hidden">
    <ul class="flex gap-7 border-l px-7 ml-7">
      <li>
        <a
          :href="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accent transition-colors"
          ><Icon icon="mdi:linkedin" class="text-4xl xl:text-3xl"
        /></a>
      </li>
      <li>
        <a
          :href="github"
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
import { github, linkedin } from '../../../../utils/socials';
</script>
