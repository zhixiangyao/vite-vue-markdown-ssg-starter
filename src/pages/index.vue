<template>
  <div>Hello, Vite!</div>
  <HelloWorld msg="haha~" />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Index',
})
</script>
