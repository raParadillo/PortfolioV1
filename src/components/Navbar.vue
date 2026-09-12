<template>
  <nav
    class="flex flex-col items-start gap-6 text-left text-sm font-medium"
    aria-label="Main navigation"
  >
    <div class="flex flex-col">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="navbar-link group block w-50 py-1 text-base font-semibold uppercase transition-colors hover:text-zinc-950"
        :class="activeSection === link.href ? 'text-zinc-950' : 'text-zinc-500'"
        @click.prevent="selectSection(link.href)"
      >
        <span
          class="inline-block transition-transform duration-250 group-hover:translate-x-5 group-hover:font-bold"
          :class="{ 'translate-x-5 font-bold': activeSection === link.href }"
        >
          {{ link.label }}
        </span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Beyond Code", href: "#beyond-code" },
  { label: "Hire Me", href: "#hire-me" },
  
];

const activeSection = ref("");
const router = useRouter();
let sections: HTMLElement[] = [];

const selectSection = (href: string) => {
  

  activeSection.value = href;
  window.history.replaceState(null, "", href);
  const section = document.querySelector<HTMLElement>(href);

  if (section) {
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 24,
      behavior: "auto",
    });
  }
};

const updateActiveSection = () => {
  const activationLine = window.innerHeight * 0.35;
  let currentSection = navLinks[0].href;

  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= activationLine) {
      currentSection = navLinks[index].href;
    }
  });

  activeSection.value = currentSection;
};

onMounted(() => {
  sections = navLinks
    
    .map((link) => document.querySelector<HTMLElement>(link.href))
    .filter((section): section is HTMLElement => section !== null);

  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>
