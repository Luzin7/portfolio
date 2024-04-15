<template>
  <footer class="bg-backgroundDefault border-t border-backgroundSecondary">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span
        class="text-sm max-sm:flex max-sm:items-center max-sm:justify-center"
        >&copy; {{ currentYear }} -
        <a href="https://lvictor-portfolio.vercel.app/" class="underline"
          >Luan Victor</a
        >
      </span>
      <ul
        class="flex flex-wrap items-center max-sm:justify-center mt-3 text-sm font-medium text-text sm:mt-0 gap-2"
      >
        <SocialLink
          :href="linkedin"
          icon="mdi:linkedin"
          socialName="linkedin"
        />
        <SocialLink :href="github" icon="mdi:github" socialName="github" />
        <SocialLink :href="youtube" icon="mdi:youtube" socialName="youtube" />
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { currentYear } from '../../utils/getYear';
import { github, linkedin, youtube } from '../../utils/socials';
import SocialLink from '../SocialLink/SocialLink.vue';
</script>
