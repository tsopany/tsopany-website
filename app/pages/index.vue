<script setup lang="ts">
const {t} = useI18n();

useSeoMeta({
	title: t('home.hero.title'),
	description: t('home.hero.subtitle')
});
</script>

<template>
	<div>
		<!-- Hero Section -->
		<section class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
				<div class="max-w-4xl mx-auto text-center">
					<h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						{{ t('home.hero.title') }}
					</h1>
					<p class="text-xl md:text-2xl mb-8 text-blue-100">
						{{ t('home.hero.subtitle') }}
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<UButton size="xl" color="white" variant="solid">
							{{ t('home.hero.cta') }}
						</UButton>
						<UButton size="xl" color="white" variant="outline">
							{{ t('home.hero.ctaSecondary') }}
						</UButton>
					</div>
				</div>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="bg-white py-16">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div class="text-center">
						<div class="text-4xl font-bold text-blue-600 mb-2">150+</div>
						<div class="text-gray-600">{{ t('home.stats.projects') }}</div>
					</div>
					<div class="text-center">
						<div class="text-4xl font-bold text-blue-600 mb-2">80+</div>
						<div class="text-gray-600">{{ t('home.stats.clients') }}</div>
					</div>
					<div class="text-center">
						<div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
						<div class="text-gray-600">{{ t('home.stats.experience') }}</div>
					</div>
					<div class="text-center">
						<div class="text-4xl font-bold text-blue-600 mb-2">98%</div>
						<div class="text-gray-600">{{ t('home.stats.satisfaction') }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Services Section -->
		<section class="bg-gray-50 py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{{ t('home.services.title') }}
					</h2>
					<p class="text-xl text-gray-600">
						{{ t('home.services.subtitle') }}
					</p>
				</div>
				
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<UCard>
						<template #header>
							<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<UIcon name="i-lucide-code" class="text-2xl text-blue-600" />
							</div>
							<h3 class="text-xl font-semibold">{{ t('home.services.webDev.title') }}</h3>
						</template>
						<p class="text-gray-600">{{ t('home.services.webDev.description') }}</p>
					</UCard>
					
					<UCard>
						<template #header>
							<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<UIcon name="i-lucide-cloud" class="text-2xl text-blue-600" />
							</div>
							<h3 class="text-xl font-semibold">{{ t('home.services.cloudSolutions.title') }}</h3>
						</template>
						<p class="text-gray-600">{{ t('home.services.cloudSolutions.description') }}</p>
					</UCard>
					
					<UCard>
						<template #header>
							<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<UIcon name="i-lucide-lightbulb" class="text-2xl text-blue-600" />
							</div>
							<h3 class="text-xl font-semibold">{{ t('home.services.consulting.title') }}</h3>
						</template>
						<p class="text-gray-600">{{ t('home.services.consulting.description') }}</p>
					</UCard>
					
					<UCard>
						<template #header>
							<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
								<UIcon name="i-lucide-smartphone" class="text-2xl text-blue-600" />
							</div>
							<h3 class="text-xl font-semibold">{{ t('home.services.mobile.title') }}</h3>
						</template>
						<p class="text-gray-600">{{ t('home.services.mobile.description') }}</p>
					</UCard>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="bg-blue-600 text-white py-20">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 class="text-3xl md:text-4xl font-bold mb-4">
					{{ t('home.cta.title') }}
				</h2>
				<p class="text-xl text-blue-100 mb-8">
					{{ t('home.cta.subtitle') }}
				</p>
				<UButton size="xl" color="white" variant="solid">
					{{ t('home.cta.button') }}
				</UButton>
			</div>
		</section>
	</div>
</template>
