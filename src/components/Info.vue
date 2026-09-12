<template>
  <section class="flex flex-col text-justify">
    <div class="flex items-center gap-3">
      <h1 class="text-5xl font-extrabold max-[650px]:text-4xl">Alexy Paradillo</h1>
      <slot name="theme-toggle" />
    </div>
    <p class="mt-2 flex flex-row text-lg font-semibold text-zinc-600">
      Full Stack Developer
    </p>
    <p class="mt-5 text-md text-zinc-500">
      bringing ideas to life with clean, <br />
      efficient code.
    </p>

    <Navbar class="hidden min-[1150px]:mt-20 min-[1150px]:flex" />
  </section>
</template>

<script setup lang="ts">

import Navbar from "./Navbar.vue";

</script>
