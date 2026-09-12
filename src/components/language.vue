<template>
	<label class="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
		<span class="sr-only">Choose language</span>
		<select
			v-model="selectedLanguage"
			aria-label="Choose language"
			class="cursor-pointer rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium normal-case tracking-normal text-zinc-700 outline-none transition-colors hover:border-zinc-400 focus:border-zinc-500"
		>
			<option
				v-for="language in languages"
				:key="language.value"
				:value="language.value"
			>
				{{ language.label }}
			</option>
		</select>
	</label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const languages = [
	{ value: "en", label: "English" },
	{ value: "ja", label: "Japanese" },
	{ value: "ko", label: "Korean" },
	{ value: "es", label: "Spanish" },
];

const selectedLanguage = ref(localStorage.getItem("language") ?? "en");

watch(selectedLanguage, (language) => {
	localStorage.setItem("language", language);
});
</script>
