<template>
  <Icon
    icon="twemoji:flag-united-states"
    class="bg-backgroundSecondary border border-primary p-2 rounded-md text-5xl lg:text-7xl"
  />
  <Icon
    icon="twemoji:flag-brazil"
    class="bg-backgroundSecondary border border-primary p-2 rounded-md text-6xl lg:text-8xl"
  />
  <Icon
    icon="twemoji:flag-france"
    class="bg-backgroundSecondary border border-primary p-2 rounded-md text-5xl lg:text-7xl"
  />
</template>

<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

defineProps({
  icon: String,
});
</script>
