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
      <div class="px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 text-blue-600">
        {{ `当前路由地址:${routeName}` }}
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

import Nav from '/@/layouts/Nav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
  },
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

    return { navbarList, router, routeName }
  },
})
</script>

<style lang="postcss" scoped>
.button {
  @apply text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium;
}

.main {
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen pt-16;
}
</style>
