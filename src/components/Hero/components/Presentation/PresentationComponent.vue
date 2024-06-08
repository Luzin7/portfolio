<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <AvailableToWork />
    <PresentationTitle />
    <PresentationDescription />
  </div>
</template>

<script setup>
import AvailableToWork from "../../../AvailableToWork/AvailableToWork.vue";
import PresentationDescription from "./PresentationDescription/PresentationDescription.vue";
import PresentationTitle from "./PresentationTitle/PresentationTitle.vue";
</script>
