import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from '/@/App.vue'
/**
 * vite-plugin-pages 生成的路由信息
 * vite-plugin-pages/client
 */
import routes from 'pages-generated'

const app = createApp(App)
app.use(
  createRouter({
    history: createWebHistory(),
    routes,
  }),
)

app.mount('#app')
