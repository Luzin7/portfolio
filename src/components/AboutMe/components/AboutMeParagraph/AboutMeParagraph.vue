<script setup lang="ts">
import MyCoreSkills from "../MyCoreSkills/MyCoreSkills.vue";
</script>

<template>
  <div class="xl:grid xl:grid-cols-10 gap-4">
    <div class="bg-backgroundForeground rounded-lg p-4 col-span-5">
      <h2
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b border-white/10 pb-2"
      >
        Caso Queira Saber
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
    </div>
    <div class="xl:col-span-5 mt-4 lg:mt-0">
      <div class="bg-backgroundForeground rounded-lg p-4 mb-4 hidden lg:block">
        <MyCoreSkills />
      </div>

      <div class="md:flex md:flex-col lg:flex-row gap-4">
        <div class="bg-backgroundForeground rounded-lg p-4">
          <div class="flex items-center md:justify-evenly lg:justify-evenly xl:justify-between lg:flex-col gap-8">
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>2</span>+</span
              >
              <h2
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Clientes satisfeitos
              </h2>
            </div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>3</span>+</span
              >
              <h2
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Projetos completo
              </h2>
            </div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-3xl font-bold text-accentForeground md:text-5xl"
                ><span>2</span>+</span
              >
              <h2
                class="text-sm font-medium capitalize text-center text-textSecondary xl:text-base"
              >
                Anos de experiência
              </h2>
            </div>
          </div>
        </div>
        <div class="bg-backgroundForeground rounded-lg p-4 hidden md:block">
          <h2
            class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b border-white/10 pb-2"
          >
            Livros Recomendados
          </h2>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Calma, colega! Já adiciono.
          </p>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Enquanto isso toma esse Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus adipisci, placeat illo tenetur facilis
            obcaecati fugit ex veritatis repudiandae voluptate asperiores libero
            dicta earum quos natus maiores debitis autem ab.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- italic border-b border-background pb-2 -->
