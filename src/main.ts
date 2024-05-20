import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import App from '/@/App.vue'

/**
 * vite-plugin-pages:         Generating routing information
 * virtual:generated-pages:   It comes from tsconfig.json-compilerOptions-types -> "vite-plugin-pages/client"
 * virtual:generated-layouts: It comes from tsconfig.json-compilerOptions-types -> "vite-plugin-vue-layouts/client"
 */
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '/@/styles/font.css'
import '/@/styles/main.css'

const routes = setupLayouts(generatedRoutes)

type Module = Record<string, Record<string, UserModule>>

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  const modules: Module = import.meta.glob('./modules/*.ts', { eager: true })

  // install all modules under `modules/`
  Object.values(modules).map((m) => m.install?.(ctx))
})
