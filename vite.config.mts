import { copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin, UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import { configDefaults, defineConfig } from 'vitest/config'
import pkg from './package.json'

// Everything the package declares is installed by the consumer, so none of it is bundled.
// Matches subpaths too (react/jsx-runtime, react-day-picker/locale, …).
const externals = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)]
const isExternal = (id: string) => externals.some(dep => id === dep || id.startsWith(`${dep}/`))

// Ships the Tailwind source theme for consumers who run Tailwind themselves.
// Kept one level below dist/ so its `@source '../'` scans the built JS, exactly as it scans src/lib in this repo.
const copyTailwindTheme = (): Plugin => ({
  name: 'copy-tailwind-theme',
  closeBundle() {
    mkdirSync('dist/tailwind', { recursive: true })
    copyFileSync('src/lib/tailwind/theme.css', 'dist/tailwind/theme.css')
  },
})

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({ insertTypesEntry: true, exclude: ['**/*.test.*', '**/*.stories.*', 'src/stories/**'] }),
      tailwindcss(),
      copyTailwindTheme(),
    ],
    resolve: { alias: { '@': fileURLToPath(new URL('src/lib', import.meta.url)) } },
    build: {
      lib: {
        entry: fileURLToPath(new URL('src/lib/index.ts', import.meta.url)),
        formats: ['es', 'cjs'],
        fileName: (format, entry) => `${entry}.${format === 'es' ? 'js' : 'cjs'}`,
        cssFileName: 'styles',
      },
      rollupOptions: {
        external: isExternal,
        // Every component is interactive; marks the bundle as a client module for React Server Components (Next.js).
        // One file per component (preserveModules) so bundlers can skip unused components and their dependencies.
        output: { banner: '"use client";', preserveModules: true, preserveModulesRoot: 'src/lib' },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          '**/storybook-static/*',
          '**/*.stories.tsx',
          '**/*.config.js',
        ],
      },
    },
  })
}
// https://vitejs.dev/config/
export default app
