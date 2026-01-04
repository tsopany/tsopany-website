<template>
	<div class="relative inline-block">
		<button
			@click="isOpen = !isOpen"
			class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
		>
			<UIcon name="i-lucide-globe" class="text-lg" />
			{{ currentLocale?.name }}
		</button>
		
		<div v-if="isOpen" class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
			<NuxtLink
				v-for="l in locales"
				:key="l.code"
				:to="switchLocalePath(l.code)"
				class="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
				:class="{'bg-blue-50 text-blue-600 font-medium': locale === l.code}"
				@click="isOpen = false"
			>
				{{ l.name }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const {locale, locales} = useI18n();
const switchLocalePath = useSwitchLocalePath();
const isOpen = ref(false);

const currentLocale = computed(() => {
	return locales.value.find(l => l.code === locale.value);
});
</script>
