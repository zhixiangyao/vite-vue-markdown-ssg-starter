<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import HelloWorld from '/@/components/HelloWorld.vue'

useHead({
  title: 'Index',
})
</script>

<template>
  <div>Hello, Vite!</div>
  <HelloWorld msg="haha~" />
</template>
