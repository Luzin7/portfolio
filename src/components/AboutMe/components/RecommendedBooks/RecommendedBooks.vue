<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import recommendedBooks from "../../data/books/books";

const [emblaRef] = emblaCarouselVue({ loop: false });
</script>

<template>
  <div class="overflow-hidden w-full" ref="emblaRef">
    <ul class="flex">
      <li
        v-for="book in recommendedBooks"
        :key="book.name"
        :title="book.name"
        class="basis-1/3 shrink-0 grow-0 min-w-0 p-4"
      >
        <a
          :href="book.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg flex justify-center"
        >
          <img
            :src="book.image"
            :alt="book.name"
            class="rounded-lg border-2 border-transparent hover:border-accentForeground min-w-[160px] h-[264px] transition-all"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
