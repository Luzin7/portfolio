<template>
  <section class="min-h-screen mx-auto flex flex-col justify-center">
    <div
      class="bg-backgroundDefault md:mx-auto md:w-3/4 xl:w-2/4 p-4 rounded-md"
    >
      <div class="text-center pt-5 pb-7">
        <h1 class="font-bold text-4xl lg:text-5xl pb-2">
          Se aproxêgue, meu arretado!
        </h1>
        <p>Venha comer um cuscuz com charque comigo.</p>
      </div>
      <form class="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Seu nome"
          class="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
        />
        <input
          type="text"
          placeholder="Seu e-mail"
          class="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
        />
        <textarea
          placeholder="Sua mensagem"
          cols="30"
          rows="10"
          class="p-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
        ></textarea>
        <button
          type="submit"
          class="px-4 py-4 rounded-md bg-accent text-text font-bold outline-none ring-1"
        >
          Entrar em contato
        </button>
      </form>
    </div>
  </section>
</template>

<script setup></script>
