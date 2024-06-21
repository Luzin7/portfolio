<template>
  <footer class="bg-background">
      <ul
        class="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-text sm:mt-0 gap-4 lg:py-4"
      >
        <SocialLink
          :href="linkedin"
          icon="mdi:linkedin"
          socialName="linkedin"
        />
        <SocialLink :href="github" icon="mdi:github" socialName="github" />
        <SocialLink :href="youtube" icon="mdi:youtube" socialName="youtube" />
      </ul>
  </footer>
</template>

<script setup>
// import { currentYear } from "../../utils/getYear";
import { github, linkedin, youtube } from "../../utils/socials";
import SocialLink from "../SocialLink/SocialLink.vue";
</script>
