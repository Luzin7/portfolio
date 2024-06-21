<template>
  <div class="flex flex-col">
    <ul class="flex flex-wrap justify-center gap-4">
      <li
        v-for="skill in coreSkills"
        :key="skill.name"
        :title="skill.name"
        class="border border-transparent rounded-lg p-2 transition-all"
      >
        <Icon
          :icon="skill.icon"
          class="text-accentForeground text-4xl lg:text-5xl"
        />
        <!-- <p class="py-4 opacity-80">{{ skill.name }}</p> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import coreSkills from "../../data/skills/skills";
</script>
