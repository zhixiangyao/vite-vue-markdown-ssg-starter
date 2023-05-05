<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HelloWorld from '/@/components/HelloWorld.vue'

useHead({
  title: 'Index',
})
</script>

<template>
  <div>Hello, Vite!</div>
  <HelloWorld msg="haha~" />
</template>
