// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 4000
	},
	app: {
		// IMPORTANT: Set this to '/' (or remove it).
		// Do NOT keep '/tsopany-website/' when using a custom domain.
		baseURL: '/'
	},
	nitro: {preset: 'github_pages'},
	modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/i18n'],
	css: ['./app/assets/css/main.css'],
	devtools: {enabled: true},
	compatibilityDate: '2024-04-03',
	i18n: {
		locales: [
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
				files: ['en.json']
			},
			{
				code: 'es',
				iso: 'es-ES',
				name: 'Español',
				files: ['es.json']
			},
			{
				code: 'de',
				iso: 'de-DE',
				name: 'Deutsch',
				files: ['de.json']
			},
			{
				code: 'sr',
				iso: 'sr-RS',
				name: 'Српски',
				files: ['sr.json']
			}
		],
		defaultLocale: 'en',
		strategy: 'prefix_except_default',
		compilation: {
			strictMessage: false
		},
		langDir: 'locales/'
	}
});