<template>
  <router-view />

  <teleport to="#global-components">
    <APlayer />

    <Live2dWidget />

    <Github
      class="hidden xl:block"
      href="https://github.com/zhixiangyao/vite-markdown-ssg-template"
    />
  </teleport>
</template>

<script setup lang="ts">
import APlayer from '/@/components/Aplayer/index.vue'
import Github from '/@/components/Github.vue'
import Live2dWidget from '/@/components/Live2dWidget.vue'
</script>
