<template>
  <div>Hello, Vite!</div>
  <HelloWorld msg="haha~" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'Index',
    })
  },
})
</script>
