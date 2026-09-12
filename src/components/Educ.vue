<template>
  <section id="education" class="flex flex-col scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Education
    </h2>
    <div
      class="mt-4 grid grid-cols-1 divide-y divide-zinc-200 text-base text-zinc-600"
    >
      <div
        v-for="education in educationItems"
        :key="education.title"
        class="flex min-h-30 flex-col gap-2 p-4"
      >
        <h4 class="text-xs font-light uppercase tracking-[0.2em] text-zinc-500">
          {{ education.year }}
        </h4>
        <h3 class="text-lg font-semibold text-zinc-800">
          {{ education.title }}
        </h3>
        <p class="text-zinc-600">{{ education.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const educationItems = [
  {
    year: "2024 - Present",
    title: "Bachelor of Science in Information Technology",
    description:
      "Currently pursuing a degree in Information Technology at Liceo de Cagayan University.",
  },
  {
    year: "2022 - 2024",
    title: "Senior High School",
    description:
      "Completed senior high school at Mapua Malayan Colleges Mindanao (MMCM) specializing in ICT-Animation.",
  },
  {
    year: "2018 - 2022",
    title: "High School Diploma",
    description: "Graduated from Imbatug National High School.",
  },
];
</script>
