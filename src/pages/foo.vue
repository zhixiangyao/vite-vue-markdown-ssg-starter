<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'foo',
    })

    const count = ref(0)

    return { count }
  },
})
</script>

<template>
  <div>foo</div>
  <div>{{ count }}</div>
  <button
    class="
      my-4
      py-2
      px-4
      bg-indigo-500
      text-white
      font-semibold
      rounded-lg
      shadow-md
      hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
    "
    @click="count++"
  >
    Click
  </button>
</template>
