<template>
  <section id="hire-me" class="flex min-h-[10vh] flex-col justify-center scroll-mt-6">
    <h2 class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
      Hire Me
    </h2>
    <div class="mt-4 max-w-2xl">
      <h3 class="text-3xl font-semibold text-zinc-800 max-[650px]:text-2xl">
        Have a project in mind?
      </h3>
      <p class="mt-4 text-lg leading-8 text-zinc-600">
        I am open to opportunities and collaborations where I can build useful,
        thoughtful, and reliable web experiences.
      </p>
      <RouterLink
        to="/contact"
        class="mt-6 inline-flex w-fit items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900"
      >
        Get in touch
        <span aria-hidden="true" class="ml-2">-&gt;</span>
      </RouterLink>
    </div>
  </section>
</template>
