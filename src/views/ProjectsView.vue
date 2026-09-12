<script setup lang="ts">
import projects from "../data/projects.json";
</script>

<template>
  <main class="min-h-screen px-6 py-10 text-zinc-600">
    <div class="mx-auto max-w-6xl">
      <RouterLink
        to="/"
        class="projects-back-link projects-back-fixed group flex w-full items-center py-4 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <span class="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
        Back to About Me
      </RouterLink>

      <section class="mt-16">
        <h1 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
          All Projects
        </h1>
        <div class="mt-8 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-3">
          <RouterLink
            v-for="project in projects"
            :key="project.title"
            :to="`/projects/${projects.indexOf(project)}`"
            class="flex min-h-40 flex-col gap-2 rounded-lg border border-zinc-200 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              class="aspect-video w-full rounded-md object-cover"
            />
            <p class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {{ project.year }}
            </p>
            <h2 class="text-lg font-semibold text-zinc-800">{{ project.title }}</h2>
            <p class="line-clamp-3">{{ project.description }}</p>
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
      </section>
    </div>
  </main>
</template>
