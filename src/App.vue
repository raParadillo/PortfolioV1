<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.documentElement.dataset.theme =
    localStorage.getItem("theme") ?? "dark";
});
</script>

<template>
  <RouterView />
</template>
