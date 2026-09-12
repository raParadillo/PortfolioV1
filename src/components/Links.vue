<script setup>
import { Icon } from "@iconify/vue";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raparadillo/",
    icon: "simple-icons:linkedin",
    hoverColor: "hover:text-zinc-950",
  },
  {
    label: "GitHub",
    href: "https://github.com/raParadillo",
    icon: "simple-icons:github",
    hoverColor: "hover:text-zinc-950",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=paradilloraquealexy@gmail.com",
    icon: "simple-icons:gmail",
    hoverColor: "hover:text-zinc-950",
  },
];
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-zinc-500 max-[1150px]:hidden">Connect with me:</p>

    <nav aria-label="Social links" class="flex flex-row gap-5 text-zinc-500">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        :aria-label="link.label"
        :title="link.label"
        class="transition-colors duration-200"
        :class="link.hoverColor"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
      >
        <Icon :icon="link.icon" width="26" height="26" aria-hidden="true" />
      </a>
    </nav>
  </div>
</template>
