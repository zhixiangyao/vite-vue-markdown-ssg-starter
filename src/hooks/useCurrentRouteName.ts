import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { Ref } from 'vue'

type RefRouterName = Ref<string>

export function useCurrentRouteName(): RefRouterName {
  const name = ref('') as RefRouterName
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
