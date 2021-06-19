<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a class="a" href="https://code.visualstudio.com/" target="_blank"> VSCode </a>
    +
    <a
      class="a"
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a class="a" href="https://github.com/johnsoncodehk/volar" target="_blank"> Volar </a>
    if using
    <code class="code">&lt;script setup&gt;</code>
  </p>

  <p> See <code class="code">README.md</code> for more information. </p>

  <p>
    <a class="a" href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a class="a" href="https://v3.vuejs.org/" target="_blank"> Vue 3 Docs </a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code class="code">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style lang="postcss" scoped>
.a {
  color: #42b983;
}

.label {
  margin: 0 0.5em;
  font-weight: bold;
}

.code {
  border-radius: 4px;
  padding: 2px 4px;
  background-color: #eee;
  color: #304455;
}
</style>
