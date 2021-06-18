import 'virtual:windi.css'
import App from '/@/App.vue'
/**
 * vite-plugin-pages 生成的路由信息
 * vite-plugin-pages/client
 */
import routes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, { routes })
