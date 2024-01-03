<script setup lang="ts">
import Github from '/@/plugins/Github.vue'
</script>

<template>
  <router-view />

  <teleport to="#global-components">
    <Github
      class="hidden xl:block"
      href="https://github.com/zhixiangyao/vite-vue-markdown-ssg-starter"
    />
  </teleport>
</template>
