<template>
  <div>Hello, Vite!</div>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'index',
      meta: [
        {
          name: `index`,
        },
      ],
    })
  },
})
</script>
