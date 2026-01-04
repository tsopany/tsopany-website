<template>
	<div class="min-h-screen flex flex-col bg-gray-50">
		<header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
			<nav class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<NuxtLink :to="localePath('/')" class="flex items-center space-x-3">
						<img src="/tsopany-logo.png" alt="Tsopany Logo" class="w-10 h-10 rounded-lg flex items-center justify-center">
						<span class="text-xl font-bold text-gray-900">Tsopany</span>
					</NuxtLink>

					<div class="flex items-center space-x-8">
						<div class="hidden md:flex space-x-6">
							<NuxtLink :to="localePath('/')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
								{{ t('nav.home') }}
							</NuxtLink>
							<NuxtLink :to="localePath('/about')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
								{{ t('nav.about') }}
							</NuxtLink>
						</div>

						<LanguageSwitcher/>
					</div>
				</div>
			</nav>
		</header>

		<main class="flex-1">
			<slot/>
		</main>

		<footer class="bg-gray-900 text-gray-300 mt-auto">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<div class="flex items-center space-x-3 mb-4">
							<img src="/tsopany-logo.png" alt="Tsopany Logo" class="w-8 h-8 rounded-lg flex items-center justify-center">
							<span class="text-lg font-bold text-white">Tsopany</span>
						</div>
						<p class="text-gray-400">{{ t('footer.tagline') }}</p>
					</div>

					<div>
						<h3 class="text-white font-semibold mb-4">{{ t('footer.quickLinks') }}</h3>
						<ul class="space-y-2">
							<li>
								<NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">
									{{ t('nav.home') }}
								</NuxtLink>
							</li>
							<li>
								<NuxtLink :to="localePath('/about')" class="hover:text-white transition-colors">
									{{ t('nav.about') }}
								</NuxtLink>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="text-white font-semibold mb-4">{{ t('footer.contact') }}</h3>
						<p class="text-gray-400">info@tsopany.com</p>
					</div>
				</div>

				<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
					<p>&copy; {{ new Date().getFullYear() }} Tsopany. {{ t('footer.rights') }}</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
const {t} = useI18n();
const localePath = useLocalePath();
</script>
