<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { useCurrentRouteName } from '/@/hooks'
import Nav from '/@/layouts/components/Nav.vue'
import ToggleButton from '/@/layouts/components/ToggleButton.vue'

const navbarList = [
  {
    id: 1,
    label: 'index',
    name: 'index',
  },
  {
    id: 2,
    label: 'foo',
    name: 'foo',
  },
  {
    id: 3,
    label: 'about',
    name: 'about',
  },
]

const router = useRouter()
const routeName = useCurrentRouteName()
</script>

<template>
  <Nav>
    <template #default>
      <button
        v-for="{ id, label, name } of navbarList"
        :key="id"
        :class="[name === routeName ? 'bg-gray-900' : 'text-gray-300']"
        class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        @click="router.push({ name })"
      >
        {{ label }}
      </button>
    </template>

    <template #info>
      <ToggleButton />
    </template>
  </Nav>

  <main class="px-4 pt-26 pb-10 min-h-full text-center text-gray-700 dark:text-gray-200">
    <router-view />
  </main>
</template>
