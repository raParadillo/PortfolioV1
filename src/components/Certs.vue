<template>
  <section id="certifications" class="flex flex-col scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Certifications
    </h2>
    <div
      class="mt-4 grid grid-cols-1 gap-4 text-base text-zinc-600 min-[1051px]:grid-cols-2"
    >
      <RouterLink
        v-for="certification in certifications.slice(0, 2)"
        :key="certification.title"
        :to="`/certifications/${certifications.indexOf(certification)}`"
        class="flex min-h-40 min-w-0 flex-col gap-2 rounded-lg border border-zinc-200 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <img
          v-if="certification.image"
          :src="certification.image"
          :alt="`${certification.title} preview`"
          class="aspect-video w-full rounded-md object-cover"
        />
        <h3 class="text-lg font-semibold text-zinc-800">
          {{ certification.title }}
        </h3>
        <p class="text-zinc-600 line-clamp-3">{{ certification.description }}</p>
      </RouterLink>
    </div>
    <RouterLink
      to="/certifications"
      class="group mt-6 cursor-pointer self-start px-4 py-2 text-sm font-medium text-zinc-500 transition-transform duration-300 hover:text-zinc-900"
    >
      View All Certifications
      <span
        aria-hidden="true"
        class="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-2"
        >-&gt;</span
      >
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import certifications from "../data/certifications.json";
</script>