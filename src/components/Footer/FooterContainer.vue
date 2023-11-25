<template>
  <footer class="bg-backgroundDefault border-t border-backgroundSecondary">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span
        class="text-sm max-sm:flex max-sm:items-center max-sm:justify-center"
        >2023
        <a href="https://lvictor-portfolio.vercel.app/" class="hover:underline"
          >Luan Victor</a
        >
      </span>
      <ul
        class="flex flex-wrap items-center max-sm:justify-center mt-3 text-sm font-medium text-text sm:mt-0 gap-2"
      >
        <li>
          <a :href="linkedin" target="_blank" rel="noopener noreferrer"
            ><Icon icon="mdi:linkedin" class="text-4xl xl:text-3xl"
          /></a>
        </li>
        <li>
          <a :href="github" target="_blank" rel="noopener noreferrer"
            ><Icon icon="mdi:github" class="text-4xl xl:text-3xl"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { github, linkedin } from '../../utils/socials';
</script>
