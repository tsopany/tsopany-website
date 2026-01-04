<script setup lang="ts">
const {t} = useI18n();

useSeoMeta({
	title: t('about.hero.title'),
	description: t('about.hero.subtitle')
});
</script>

<template>
	<div>
		<!-- Hero Section -->
		<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto text-center">
					<h1 class="text-4xl md:text-5xl font-bold mb-4">
						{{ t('about.hero.title') }}
					</h1>
					<p class="text-xl text-gray-300">
						{{ t('about.hero.subtitle') }}
					</p>
				</div>
			</div>
		</section>

		<!-- Story Section -->
		<section class="bg-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{{ t('about.story.title') }}
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed">
						{{ t('about.story.content') }}
					</p>
				</div>
			</div>
		</section>

		<!-- Mission Section -->
		<section class="bg-gray-50 py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{{ t('about.mission.title') }}
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed">
						{{ t('about.mission.content') }}
					</p>
				</div>
			</div>
		</section>

		<!-- Values Section -->
		<section class="bg-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900">
						{{ t('about.values.title') }}
					</h2>
				</div>
				
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<UIcon name="i-lucide-award" class="text-3xl text-blue-600" />
						</div>
						<h3 class="text-xl font-semibold mb-2">{{ t('about.values.excellence.title') }}</h3>
						<p class="text-gray-600">{{ t('about.values.excellence.description') }}</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<UIcon name="i-lucide-sparkles" class="text-3xl text-blue-600" />
						</div>
						<h3 class="text-xl font-semibold mb-2">{{ t('about.values.innovation.title') }}</h3>
						<p class="text-gray-600">{{ t('about.values.innovation.description') }}</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<UIcon name="i-lucide-shield-check" class="text-3xl text-blue-600" />
						</div>
						<h3 class="text-xl font-semibold mb-2">{{ t('about.values.integrity.title') }}</h3>
						<p class="text-gray-600">{{ t('about.values.integrity.description') }}</p>
					</div>
					
					<div class="text-center">
						<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<UIcon name="i-lucide-users" class="text-3xl text-blue-600" />
						</div>
						<h3 class="text-xl font-semibold mb-2">{{ t('about.values.collaboration.title') }}</h3>
						<p class="text-gray-600">{{ t('about.values.collaboration.description') }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Team Section -->
		<section class="bg-blue-600 text-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto text-center">
					<h2 class="text-3xl md:text-4xl font-bold mb-6">
						{{ t('about.team.title') }}
					</h2>
					<p class="text-lg text-blue-100 leading-relaxed">
						{{ t('about.team.content') }}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>
