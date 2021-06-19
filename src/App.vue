<template>
  <Nav>
    <template #default>
      <button
        v-for="{ id, label, name } of navbarList"
        :key="id"
        :class="[name === routeName ? 'bg-gray-900' : 'text-gray-300', 'button']"
        @click="router.push({ name })"
      >
        {{ label }}
      </button>
    </template>

    <template #info>
      <div class="info text-blue-600">
        {{ `当前路由地址:${routeName}` }}
      </div>
      <div class="info text-red-600">
        {{ `环境: ${environment}` }}
      </div>
    </template>
  </Nav>

  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useCurrentRouteName } from '/@/hooks'

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
        name: 'index',
      },
      {
        id: 2,
        label: 'bar',
        name: 'bar',
      },
      {
        id: 3,
        label: 'foo',
        name: 'foo',
      },
    ]
    const router = useRouter()
    const routeName = useCurrentRouteName()

    const environment: unknown = import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined'

    return { navbarList, environment, router, routeName }
  },
})
</script>

<style lang="postcss" scoped>
.button {
  @apply text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium;
}

.info {
  @apply px-3 py-2 rounded-md text-sm font-medium flex-shrink-0;
}

.main {
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen pt-16;
}
</style>
