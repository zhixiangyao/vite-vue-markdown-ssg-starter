<script lang="ts" setup>
import { ref, reactive, toRef } from 'vue'
import { useHead } from '@vueuse/head'

useHead({ title: 'test3' })

const temp = { count: 0 }
const count1 = ref(temp.count) // 深拷贝
const count2 = reactive({ value: 0 })
const count3 = toRef(temp, 'count') // 引用

function add() {
  count1.value++
  count2.value++
  count3.value++
}
</script>

<template>
  <h1>test3</h1>
  <div>ref: {{ count1 }}</div>
  <div>reactive: {{ count2.value }}</div>
  <div>toRef: {{ count3 }}</div>
  <div>temp: {{ temp.count }}</div>

  <button
    class="my-4 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;"
    @click="add()"
  >
    Click
  </button>
</template>
