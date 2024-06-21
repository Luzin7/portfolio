<script setup>
import MyCoreSkills from "../MyCoreSkills/MyCoreSkills.vue";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks.vue";
</script>

<template>
  <div class="xl:grid xl:grid-cols-10 gap-4">
    <div class="border border-backgroundForeground rounded-lg p-4 col-span-5">
      <h2
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b border-backgroundForeground pb-2"
      >
        Caso queira saber...
      </h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Sou apaixonado por jogos, meu pernambuco, pelo filme Ratatouille e
        viciado em usar a gíria "tá ligado", sou um desenvolvedor de software
        que cursa Engenharia de Software. Gosto de automatizar processos e
        entregar soluções eficientes.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Costumo ajudar e ser proativo nas comunidades que estou presente, alem
        de desenvolver ferramentas com o mesmo propósito. Se eu souber eu vou te
        ajudar, se não, pesquisamos e aprendemos juntos.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Ratatouille não é só meu filme favorito, mas também uma lembrança
        constante de que com paixão e dedicação, qualquer um pode alcançar
        grandes feitos.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Recentemente, decidi iniciar minha jornada na leitura. Agora, estou começando a explorar esse
        universo, ansioso para descobrir histórias inspiradoras e expandir meus
        conhecimentos.
      </p>
    </div>
    <div class="xl:col-span-5 mt-4 lg:mt-0">
      <div class="border border-backgroundForeground rounded-lg p-4 mb-4 hidden lg:block">
        <MyCoreSkills />
      </div>

      <div class="md:flex md:flex-col lg:flex-row gap-4">
        <div class="border border-backgroundForeground rounded-lg p-4">
          <div
            class="flex items-center md:justify-evenly lg:justify-evenly xl:justify-between lg:flex-col gap-8"
          >
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>2</span>+</span
              >
              <p
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Clientes satisfeitos
              </p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>3</span>+</span
              >
              <p
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Projetos completo
              </p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>2</span>+</span
              >
              <p
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Anos de experiência
              </p>
            </div>
          </div>
        </div>
        <div class="border border-backgroundForeground rounded-lg p-4 hidden md:block overflow-hidden">
          <h3
            class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 border-b border-backgroundForeground pb-2"
          >
            Livros Recomendados
          </h3>
          <RecommendedBooks />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- italic border-b border-background pb-2 -->
