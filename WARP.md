# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Professional multilingual software company homepage built with Nuxt 4, @nuxt/ui components, and @nuxtjs/i18n for internationalization. Supports English, Spanish, German, and Serbian. Uses pnpm as package manager and runs on port 4000 in development.

## Essential Commands

### Development
```powershell
pnpm dev           # Start dev server on localhost:4000
pnpm build         # Production build
pnpm pages         # Build for GitHub Pages deployment
pnpm preview       # Preview production build locally
pnpm demo          # Serve built static files
pnpm deploy        # Deploy to GitHub Pages
```

### Linting
```powershell
# ESLint is configured via @nuxt/eslint
# Check nuxt.config.ts for enabled modules
```

## Architecture

### Project Structure
- `app/` - Nuxt application code
  - `app.vue` - Root component with NuxtLayout and NuxtPage
  - `layouts/default.vue` - Main layout with navigation, language switcher, and footer
  - `pages/` - File-based routing
    - `index.vue` - Home page with hero, stats, services, and CTA sections
    - `about.vue` - About page with company story, mission, values, and team
  - `components/` - Vue components (auto-imported)
    - `LanguageSwitcher.vue` - Dropdown for language selection
- `locales/` - Translation files (en.json, es.json, de.json, sr.json)
- `i18n.config.ts` - i18n configuration importing all locale files
- `public/` - Static assets
- `nuxt.config.ts` - Nuxt configuration (port: 4000, modules: content, ui, eslint, i18n)

### Key Patterns

**Internationalization**: Use i18n composable in components:
```typescript
const {t} = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
```

**Translations**: Access translations via `t('key.path')`, e.g., `t('home.hero.title')`

**Locale Routing**: 
- Default locale (en): `/` and `/about`
- Other locales: `/es`, `/es/about`, `/de`, `/de/about`, `/sr`, `/sr/about`

**Adding Translations**: Update all 4 locale files in `locales/` directory (en.json, es.json, de.json, sr.json)

## Configuration Notes

- Dev server port is customized to **4000** (not default 3000)
- TypeScript is configured via project references to `.nuxt/tsconfig.*.json`
- Package manager is locked to `pnpm@10.27.0`
- ESLint config extends from `.nuxt/eslint.config.mjs`
- i18n strategy: `prefix_except_default` (English has no prefix, others do)
- Supported languages: English (en), Spanish (es), German (de), Serbian (sr)

## Code Style

- Always use arrow functions
- Use global config object instead of process.env
- Nuxt auto-imports are enabled (composables, components, utilities)
