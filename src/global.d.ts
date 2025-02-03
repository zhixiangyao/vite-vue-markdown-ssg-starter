import type { ViteSSGContext } from 'vite-ssg'

declare global {
  interface Live2dWidgetOption {
    display?: {
      position?: 'right' | 'top' | 'left' | 'bottom'
      width?: number
      height?: number
      hOffset?: number
      vOffset?: number
    }
    react?: {
      opacityDefault?: number
      opacityOnHover?: number
    }
  }

  type UserModule = (ctx: ViteSSGContext) => void

  interface ImportMetaEnv {
    VITE_APP_ENV: string
    VITE_APP_PROXY_URL: string
    VITE_APP_BASE_URL: string
    // More env variables...
  }
}

export {}
