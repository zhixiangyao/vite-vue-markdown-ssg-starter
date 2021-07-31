<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Live2dWidget } from '/@/logic'

onMounted(() => {
  const height = Math.floor(document?.body?.clientHeight / 3)

  Live2dWidget({
    display: {
      position: 'right',
      width: height * 0.7,
      height,
      hOffset: 20,
      vOffset: 20,
    },
    react: {
      opacityDefault: 0.7,
      opacityOnHover: 0.2,
    },
  })
})
</script>
