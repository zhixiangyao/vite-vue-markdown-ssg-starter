<script setup lang="ts">
import APlayer from '/@/plugins/Aplayer/index.vue'
import Github from '/@/plugins/Github.vue'
</script>

<template>
  <router-view />

  <teleport to="#global-components">
    <APlayer />

    <Github
      class="hidden xl:block"
      href="https://github.com/zhixiangyao/vite-vue-markdown-ssg-starter"
    />
  </teleport>
</template>
