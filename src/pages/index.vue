<template>
  <div>Hello, Vite!</div>
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

    return {}
  },
})
</script>
