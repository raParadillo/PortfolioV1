<template>
  <section id="projects" class="flex flex-col scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Projects
    </h2>
    <div
      class="mt-4 grid grid-cols-1 gap-4 text-base text-zinc-600 min-[1051px]:grid-cols-2"
    >
      <RouterLink
        v-for="project in sortedProjects.slice(0, 4)"
        :key="project.title"
        :to="`/projects/${projects.indexOf(project)}`"
        class="flex min-h-40 min-w-0 flex-col gap-2 rounded-lg border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <img
          :src="project.image"
          :alt="`${project.title} preview`"
          class="aspect-video w-full rounded-md object-cover"
        />
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {{ project.year }}
        </p>
        <h3 class="text-lg font-semibold text-zinc-800">{{ project.title }}</h3>
        <p class="text-zinc-600 line-clamp-3">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <span
            v-for="stack in project.stacks"
            :key="stack"
            class="project-stack rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
          >
            {{ stack }}
          </span>
        </div>
      </RouterLink>
    </div>
    <RouterLink
      to="/projects"
      class="group mt-6 cursor-pointer self-start px-4 py-2 text-sm font-medium text-zinc-500 transition-transform duration-300 hover:text-zinc-900"
    >
      View All Projects
      <span
        aria-hidden="true"
        class="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-2"
        >-&gt;</span
      >
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import projects from "../data/projects.json";

const sortedProjects = computed(() =>
  [...projects].sort(
    (A, B) => Number(B.year) - Number(A.year),
  ),
);
</script>
