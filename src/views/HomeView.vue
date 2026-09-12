<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import About from "../components/About.vue";
import Info from "../components/Info.vue";
import Links from "../components/Links.vue";
import Projects from "../components/Projects.vue";
import Education from "../components/Educ.vue";
import Footer from "../components/Footer.vue";
import Experience from "../components/Exp.vue";
import Beyond from "../components/Beyond.vue";
import HireMe from "../components/HireMe.vue";

const cursorPosition = ref({ x: -200, y: -200 });
const windowScrollY = ref(0);
const theme = ref<"light" | "dark">("dark");

const updateCursorPosition = (event: MouseEvent) => {
  cursorPosition.value = { x: event.clientX, y: event.clientY };
};

const updateScrollPosition = () => {
  windowScrollY.value = window.scrollY;
};

onMounted(() => {
  theme.value = (localStorage.getItem("theme") as "light" | "dark") ?? "dark";
  window.addEventListener("mousemove", updateCursorPosition);
  window.addEventListener("scroll", updateScrollPosition, { passive: true });
  updateScrollPosition();
});

watch(theme, (selectedTheme) => {
  localStorage.setItem("theme", selectedTheme);
  document.documentElement.dataset.theme = selectedTheme;
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateCursorPosition);
  window.removeEventListener("scroll", updateScrollPosition);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <main
    class=" relative isolate flex min-h-screen w-full flex-col items-center justify-start px-6"
    :class="{
      'bg-linear-to-br from-zinc-100 via-white to-zinc-200': theme === 'light',
      'bg-linear-to-br from-zinc-900 via-zinc-950 to-black': theme === 'dark',
    }"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none fixed z-1 hidden h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[200px] md:block"
      :style="{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }"
    ></div>
    <section
      class="relative z-10 grid w-full max-w-7xl grid-cols-[0.85fr_1.15fr] p-6 pt-15 gap-30 text-center max-[1150px]:grid-cols-1 max-[1150px]:gap-y-16"
    >
      <div
        class="home-sidebar sticky top-15 flex  self-start flex-col gap-2 justify-between max-[1150px]:static min-[1150px]:min-h-[calc(100vh-10rem)]"
      >
        <Info>
          <template #theme-toggle>
            <button
              type="button"
              class="theme-dot h-3 w-3 cursor-pointer rounded-full border border-zinc-400 bg-white transition-transform hover:scale-125"
              :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
              :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
              @click="toggleTheme"
            ></button>
          </template>
        </Info>
        <Links class="mt-5" />
      </div>
      <div class="home-content scale-100 flex flex-col gap-20 pr-4 text-left">
        <About />
        <Projects />
        <Experience />
        <Education />
        <Beyond />
        <HireMe />
        <Footer />
      </div>
    </section>

    <button
      v-show="windowScrollY > 2000"
      type="button"
      class="fixed bottom-6 right-6 z-20 cursor-pointer rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-500 shadow-sm transition-colors hover:text-zinc-900"
      @click="scrollToTop"
    >
      Back to top
    </button>

  </main>
</template>
