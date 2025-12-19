// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 4000
	},
	modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
	devtools: {enabled: true},
	compatibilityDate: '2024-04-03'
});