<template>
  <Nav>
    <template #default>
      <button
        v-for="{ id, label, path } of navbarList"
        :key="id"
        :class="[
          path === routePath && 'bg-gray-900',
          path !== routePath && 'text-gray-300',
          'text-white',
          'hover:bg-gray-700',
          ...baseClassStyle,
        ]"
        @click="router.push({ path })"
      >
        {{ label }}
      </button>
    </template>

    <template #info>
      <div :class="[...baseClassStyle, 'text-blue-600', 'flex-shrink-0']">
        {{ `当前路由地址:${routePath}` }}
      </div>
      <div :class="[...baseClassStyle, 'text-red-600', 'flex-shrink-0']">
        {{ `环境: ${environment}` }}
      </div>
    </template>
  </Nav>

  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCurrentRoutePath } from '/@/hooks'

import Nav from '/@/layout/Nav'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
  },
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context
   * @returns
   */
  setup() {
    const navbarList = [
      {
        id: 1,
        label: 'index',
        path: '/',
      },
      {
        id: 2,
        label: 'bar',
        path: '/bar',
      },
      {
        id: 3,
        label: 'foo',
        path: '/foo',
      },
    ]
    const router = useRouter()
    const routePath = useCurrentRoutePath()
    const baseClassStyle = ref(['px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium'])

    const environment: unknown = import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined'

    return { navbarList, environment, router, routePath, baseClassStyle }
  },
})
</script>

<style lang="postcss" scoped>
.main {
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen pt-16;
}
</style>
