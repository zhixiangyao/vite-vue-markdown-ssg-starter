import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useCurrentRouteName() {
  const name = ref('')
  const route = useRoute()

  watch(
    () => route.name,
    async (v) => {
      name.value = v as string
    },
    {
      immediate: true,
    },
  )

  return name
}
