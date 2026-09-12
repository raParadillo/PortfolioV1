<template>
  <section id="beyond-code" class="flex flex-col scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Beyond Code
    </h2>
    <div class="mt-4 grid grid-cols-1 divide-y divide-zinc-200 text-base text-zinc-600">
      <article v-for="item in beyondCodeItems" :key="item.title" class="flex flex-col gap-2 p-4">
        <h3 class="text-lg font-semibold text-zinc-800">{{ item.title }}</h3>
        <p>
          {{ item.description }}
        </p>
      </article>
      
    </div>
  </section>
</template>

<script setup lang="ts">
const beyondCodeItems = [
  {
    title: "Voice-over",
    description:
      "I like turning random words into dramatic announcements, character voices, and tiny audio adventures. Give me a script and I will probably make it sound more serious than it needs to be.",
  },
  {
    title: "Book Reading",
    description:
      "I read to learn new things, meet imaginary people, and occasionally stare at the same page for five minutes while thinking about snacks.",
  },
  {
    title: "Gaming",
    description:
      "Gaming is my excuse to solve problems, explore strange worlds, and confidently say 'one more game' several times in a row.",
  },
  {
    title: "Fitness",
    description:
      "I work out to stay healthy, clear my head, and prove that my legs still function after sitting in front of a computer all day.",
  },
];

</script>
