import 'virtual:windi.css'
import App from '/@/App.vue'
/**
 * vite-plugin-pages 生成的路由信息
 * virtual:generated-pages 来源于 tsconfig.json 配置里的 vite-plugin-pages/client
 */
import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx))
})
