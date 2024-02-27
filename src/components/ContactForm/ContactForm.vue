<template>
  <section
    id="contact"
    class="min-h-screen mx-auto flex flex-col justify-center"
  >
    <div
      class="bg-backgroundDefault md:mx-auto md:w-3/4 xl:w-2/4 p-4 rounded-md"
    >
      <div class="text-center pt-5 pb-7">
        <h1 class="font-bold text-4xl lg:text-5xl pb-2">Fala comigo!</h1>
        <p>
          Assim como a colaboração entre grandes mentes resolvem a ciência, a
          nossa conversa pode ser o próximo passo para desvendar desafios e
          construir algo incrível.
        </p>
      </div>
      <form
        class="flex flex-col gap-5"
        action="https://formsubmit.co/cb7a6e4be8889fe5dd61076026960c4c"
        method="POST"
      >
        <input
          type="text"
          placeholder="Seu nome"
          class="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
          name="name"
          minlength="4"
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          class="px-4 py-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
          name="email"
          minlength="7"
          required
        />
        <textarea
          placeholder="Sua mensagem"
          cols="20"
          rows="7"
          class="p-4 rounded-md outline-none ring-1 ring-transparent focus:ring-primary transition-all"
          name="message"
          minlength="10"
          required
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
