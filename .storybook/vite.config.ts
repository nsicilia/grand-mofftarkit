import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vitest/config'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: { alias: { '@': fileURLToPath(new URL('../src/lib', import.meta.url)) } },
  })
}
// https://vitejs.dev/config/
export default app
