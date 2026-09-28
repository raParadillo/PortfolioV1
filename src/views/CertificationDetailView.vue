<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import certifications from "../data/certifications.json";

const route = useRoute();
const router = useRouter();
const certification = computed(() => certifications[Number(route.params.id)]);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
    return;
  }

  router.push("/certifications");
};
</script>

<template>
  <main class="min-h-screen px-6 py-10 text-zinc-600">
    <div v-if="certification" class="mx-auto max-w-4xl">
      <button
        type="button"
        @click="goBack"
        class="project-back-link group mb-12 inline-flex max-w-full items-center px-3 py-2 text-sm font-medium text-zinc-500 shadow-md transition-colors hover:text-zinc-900"
      >
        <span class="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
        Back
      </button>

      <article>
        <p class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
          Certification Details<span v-if="certification.year"> · {{ certification.year }}</span>
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <h1 class="text-4xl font-bold text-zinc-800 max-[650px]:text-3xl">
              {{ certification.title }}
            </h1>
            <a
              v-if="certification.url"
              :href="certification.url"
              target="_blank"
              rel="noreferrer"
              aria-label="Verify credential"
              title="Verify credential"
              class="text-4xl text-zinc-800 transition-all duration-300 hover:text-zinc-900 hover:translate-x-1 hover:-translate-y-1 max-[650px]:text-3xl"
            >
              &#8599;
            </a>
          </div>

          <a
            v-if="certification.url"
            :href="certification.url"
            target="_blank"
            rel="noreferrer"
            class="hidden items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900 min-[700px]:inline-flex"
          >
            Verify Credential
            <span aria-hidden="true" class="ml-2">-&gt;</span>
          </a>
        </div>

        <img
          v-if="certification.image"
          :src="certification.image"
          :alt="`${certification.title} preview`"
          class="mt-8 aspect-video w-full rounded-lg object-cover"
        />

        <div class="mt-8">
          <p class="text-lg leading-8">{{ certification.description }}</p>

          <a
            v-if="certification.url"
            :href="certification.url"
            target="_blank"
            rel="noreferrer"
            class="mt-6 inline-flex items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900 min-[700px]:hidden"
          >
            Verify Credential
            <span aria-hidden="true" class="ml-2">-&gt;</span>
          </a>
        </div>
      </article>
    </div>

    <div v-else class="mx-auto max-w-4xl">
      <h1 class="text-2xl font-semibold text-zinc-800">Certification not found</h1>
      <RouterLink to="/certifications" class="mt-4 inline-block underline">
        Return to Certifications
      </RouterLink>
    </div>
  </main>
</template>
