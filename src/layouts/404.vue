<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <router-view />
    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.go(-1)"> 返回 </button>
    </div>
  </main>
</template>
