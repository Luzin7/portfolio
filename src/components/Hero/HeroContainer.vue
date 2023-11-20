<template>
  <section
    class="bg-backgroundSecondary min-h-[93vh] mx-auto flex flex-col justify-center"
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
    <div class="absolute bottom-10 animate-bounce">
      <span>Icone rolar para baixo</span>
    </div>
  </section>
</template>

<script setup>
import MoreContent from './components/MoreContent/MoreContent.vue';
</script>
