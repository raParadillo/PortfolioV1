<template>
  <section id="experience" class="flex flex-col scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Experience
    </h2>
    <div
      class="mt-4 grid grid-cols-1 divide-y divide-zinc-200 text-base text-zinc-600"
    >
      <article
        v-for="experience in experienceItems"
        :key="experience.title"
        class="flex min-h-30 flex-col gap-2 p-4"
      >
        <h4 class="text-xs font-light uppercase tracking-[0.2em] text-zinc-500">
          {{ experience.year }}
        </h4>
        <h3 class="text-lg font-semibold text-zinc-800">
          {{ experience.title }}
        </h3>
        <p>{{ experience.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const experienceItems = [
  {
    year: "2026 - Present",
    title: "Student Developer",
    description:
      "Currently working on three projects during my third year of college, including an Android application for local government healthcare services and another application designed for university organizations.",
  },
  {
    year: "2025 - 2026",
    title: "Assistant Developer",
    description:
      "Worked as an assistant developer for a professor during my second year of college. Learned real-world development workflows using GitHub, tracked tasks through backlog and in-progress stages, fixed bugs, and supported quality assurance testing.",
  },
  {
    year: "2024 - 2025",
    title: "Student Developer",
    description:
      "Created small games and websites during my first year of college, practicing programming fundamentals, interface design, and responsive web development through hands-on projects.",
  },
  {
    year: "2022 - 2024",
    title: "Assistant Developer / UI/UX Designer",
    description:
      "Assisted with the development and UI/UX design of a sports festival website, helping create an accessible interface for schedules, event information, and activity updates.",
  },
];
</script>