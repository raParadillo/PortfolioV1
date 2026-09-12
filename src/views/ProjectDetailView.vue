<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import projects from "../data/projects.json";

const route = useRoute();
const router = useRouter();
const project = computed(() => projects[Number(route.params.id)]);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
    return;
  }

  router.push("/projects");
};
</script>

<template>
  <main class="min-h-screen px-6 py-10 text-zinc-600">
    <div v-if="project" class="mx-auto max-w-4xl">
      <button
        type="button"
        @click="goBack"
        class="project-back-link group mb-12 inline-flex max-w-full items-center  px-3 py-2 text-sm font-medium text-zinc-500 shadow-md transition-colors hover:text-zinc-900"
      >
        <span class="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
        Back
      </button>

      <article>
        <p class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
          Project Details · {{ project.year }}
        </p>
        <div class="mt-4 flex items-center justify-between gap-3">
          
          <a
            
            :href="project.url"
            target="_blank"
            rel="noreferrer"
            aria-label="Open live project"
            title="Open live project"
            class="text-xl text-zinc-500 group flex flex-row hover:text-zinc-900"
          >
           <h1 class="text-4xl font-bold text-zinc-800 max-[650px]:text-3xl">
            {{ project.title }}
          </h1> 
          <h1 class="text-4xl  text-zinc-800 max-[650px]:text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 hover:text-zinc-900">
            
            &#8599;
          </h1>
          
          </a>
          <a
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              class="mt-4 hidden items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900 min-[700px]:inline-flex"
            >
              Go to project
              <span aria-hidden="true" class="ml-2">-&gt;</span>
            </a>
        </div>
        <img
          :src="project.image"
          :alt="`${project.title} preview`"
          class="mt-8 aspect-video w-full rounded-lg object-cover"
        />
        <div class="mt-8 grid gap-8 min-[700px]:grid-cols-[1fr_220px]">
          <p class="text-lg leading-8">{{ project.description }}</p>
          <div>
            <h2 class="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Built with
            </h2>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="stack in project.stacks"
                :key="stack"
                class="project-stack rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {{ stack }}
              </span>
            </div>
            
            <a
              :href="project.url"
              target="_blank"
              rel="noreferrer"
              class="mt-4 hidden items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900 max-[700px]:inline-flex"
            >
              Go to project
              <span aria-hidden="true" class="ml-2">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="mx-auto max-w-4xl">
      <h1 class="text-2xl font-semibold text-zinc-800">Project not found</h1>
      <RouterLink to="/projects" class="mt-4 inline-block underline">
        Return to Projects
      </RouterLink>
    </div>
  </main>
</template>
