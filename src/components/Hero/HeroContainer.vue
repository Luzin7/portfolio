<template>
  <section
    id="home"
    class="bg-backgroundSecondary min-h-screen mx-auto flex flex-col justify-center"
  >
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl md:text-5xl font-bold text-white text-center">
        Olá, me chamo Luan Victor! <br />
        Desenvolvedor
        <span class="underline decoration-primary">Fullstack</span>
      </h1>
      <p
        class="opacity-80 text-base w-9/12 lg:w-5/12 2xl:w-3/12 lg:text-base text-center mx-auto pt-2 lg:pt-4"
      >
        Sou um desenvolvedor de software focado em automatizar processos e
        entregar soluções eficientes.
      </p>
    </div>
    <MoreContent />
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <Icon
        icon="material-symbols-light:expand-more-rounded"
        class="animate-bounce text-4xl"
      />
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import MoreContent from './components/MoreContent/MoreContent.vue';
</script>
