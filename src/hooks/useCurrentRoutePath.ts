import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Ref } from 'vue'

export function useCurrentRoutePath(): Ref<string> {
  const path = ref('')
  const route: RouteLocationNormalizedLoaded = useRoute()

  // fetch the user information when params change
  watch(
    () => route.path,
    async (v) => {
      path.value = v
    },
  )

  return path
}
