<template>
  <footer class="flex flex-col gap-2 ml-4 text-zinc-500">
    <p class="text-sm">
      Heavily inspired by
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 hover:text-zinc-800"
      >
        Brittany Chiang's portfolio.
      </a>
    </p>
    <p class="text-sm mb-5 border-b border-zinc-200 pb-4">Built with <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 hover:text-zinc-800"
      >
        vue.js
      </a>and <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 hover:text-zinc-800"
      >
        tailwind
      </a> in <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 hover:text-zinc-800"
      >
        visual studio code
      </a>.</p>
      <div class="flex flex-row justify-between gap-2 mb-5 max-[1400px]:mb-15">
        <p class="text-sm">© {{ new Date().getFullYear() }} Alexy Paradillo. All rights reserved.</p>
        <p class="text-sm">
          
        </p>
      </div>

  </footer>
</template>