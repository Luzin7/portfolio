<template>
  <div class="flex flex-col items-center">
    <h2 class="font-bold text-3xl md:text-4xl mb-4">
      Principais conhecimentos
      <span class="text-base block text-center">(mas não os únicos)</span>
    </h2>
    <ul
      class="lg:w-4/6 flex flex-wrap justify-center text-center mx-auto gap-7"
    >
      <li
        v-for="skill in coreSkills"
        :key="skill.name"
        class="flex flex-col justify-center items-center"
      >
        <Icon :icon="skill.icon" class="text-primary text-4xl lg:text-5xl" />
        <p class="py-4 opacity-80">{{ skill.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import coreSkills from '../../data/skills/skills';
import { Icon } from '@iconify/vue';
</script>
