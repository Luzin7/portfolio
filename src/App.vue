<script setup>
import { defineAsyncComponent } from "vue";
import AboutMe from "./components/AboutMe/AboutMe.vue";
import HeroContainer from "./components/Hero/HeroContainer.vue";
const FooterContainer = defineAsyncComponent(
  () => import("./components/Footer/FooterContainer.vue"),
);
const MyProjects = defineAsyncComponent(
  () => import("./components/Projects/MyProjects.vue"),
);
</script>

<template>
  <main class="container mx-auto">
    <HeroContainer />
    <MyProjects />
    <!-- <section
      id="projects"
      class="flex flex-col justify-center min-h-screen gap-8"
    >
      <div class="mb-8">
        <h2
          class="text-3xl md:text-4xl xl:text-5xl text-text font-extrabold text-center"
        >
          Ideias Que Hoje São Realidade
        </h2>
        <p
          class="text-textSecondary text-base lg:text-lg text-center mx-auto mt-6"
        >
          Alguns projetos que trabalhei que merecem destaque.
        </p>
      </div>

      <div class="w-2/4 mx-auto">
        <ul class="flex gap-4">
          <li
            class="p-4 rounded-xl border border-secondary bg-gradient-to-bl from-secondary via-transparent to-secondary"
          >
            <h3 class="font-medium text-xl md:text-2xl xl:text-3xl">
              Fábula à Mesa
            </h3>
            <p class="mt-6">
              Quantas histórias únicas nos formam ao longo da infância e até
              depois dela. Sobretudo as histórias de personagens mais próximos
              de nós, aqueles com problemas em seus relacionamentos, traumas,
              motivações e crenças. É nesse sentido que surge “Fábula à Mesa: O
              Tear de Mitos e Contos de Tabuleiro”, ou simplesmente “FAMA”. Um
              sistema de RPG de mesa, que na tradução da sigla quer dizer algo
              como “jogo de interpretação de papéis”.
            </p>
          </li>
          <li
            class="p-4 rounded-xl border border-secondary bg-gradient-to-tr from-backgroundForeground via-transparent to-backgroundForeground"
          >
            <h3 class="font-medium text-xl md:text-2xl xl:text-3xl">
              Fábula à Mesa
            </h3>
            <p class="mt-6">
              Quantas histórias únicas nos formam ao longo da infância e até
              depois dela. Sobretudo as histórias de personagens mais próximos
              de nós, aqueles com problemas em seus relacionamentos, traumas,
              motivações e crenças. É nesse sentido que surge “Fábula à Mesa: O
              Tear de Mitos e Contos de Tabuleiro”, ou simplesmente “FAMA”. Um
              sistema de RPG de mesa, que na tradução da sigla quer dizer algo
              como “jogo de interpretação de papéis”.
            </p>
          </li>
        </ul>
      </div>
    </section> -->
    <AboutMe />
  </main>
  <FooterContainer class="max-sm:pb-12" />
</template>
