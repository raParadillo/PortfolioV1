<template>
  <main class="min-h-screen px-6 py-10 text-zinc-600">
    <div class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col justify-between">
      <RouterLink
        to="/"
        class="group inline-flex w-fit items-center text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <span class="mr-2 transition-transform group-hover:-translate-x-1">&lt;-</span>
        Back to About Me
      </RouterLink>

      <section class="py-20">
        <p class="text-xs font-medium uppercase tracking-[0.5em] text-zinc-500">
          Contact
        </p>
        <h1 class="mt-5 text-5xl font-bold text-zinc-800 max-[650px]:text-4xl">
          Let’s build something useful.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8">
          I’m open to opportunities, freelance work, and thoughtful collaborations.
          Send me a message and tell me what you’re working on.
        </p>
        <p class="mt-8">Paradilloraquealexy@gmail.com</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=paradilloraquealexy@gmail.com"
          target="_blank"
          rel="noreferrer"
          class="mt-2 inline-flex items-center rounded-md border border-zinc-500 px-4 py-2 text-sm font-medium text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:text-zinc-900"
        >
          Email Me
          <span aria-hidden="true" class="ml-2">-&gt;</span>
        </a>

        <div class="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/raparadillo/"
            target="_blank"
            rel="noreferrer"
            class="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/raParadillo"
            target="_blank"
            rel="noreferrer"
            class="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>

      <p class="text-sm text-zinc-500">Usually replies within a day.</p>
    </div>
  </main>
</template>
