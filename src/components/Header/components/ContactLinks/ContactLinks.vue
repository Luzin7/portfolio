<template>
  <div class="max-md:hidden">
    <ul class="flex gap-4 border-l px-7 ml-7">
      <SocialLink :href="linkedin" icon="mdi:linkedin" socialName="linkedin" />
      <SocialLink :href="github" icon="mdi:github" socialName="github" />
    </ul>
  </div>
</template>

<script setup>
import { github, linkedin } from '../../../../utils/socials';
import SocialLink from '../../../SocialLink/SocialLink.vue';
</script>
