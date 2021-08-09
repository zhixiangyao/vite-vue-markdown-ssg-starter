/**
 * https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
 *
 * 智能提示
 * 默认情况下，Vite 为 import.meta.env 提供了 Type 定义。
 * 随着在 .env[mode] file 中自定义了越来越多的 env variable ，
 * 你可能想要在代码中获取这些以 'VITE_' 为前缀的用户自定义 env variable 的 TypeScript 智能提示。
 * 要想做到这一点，你可以在 src 目录下创建一个 env.d.ts file，
 * 接着按下面这样增加 ImportMetaEnv 的定义：
 * ImportMetaEnv 会和 tsconfig.json -> compilerOptions -> types = ["vite/client"] 里的 ImportMetaEnv 合并
 */

interface ImportMetaEnv {
  VITE_APP_NODE_ENV: string
  VITE_APP_ENV: string
  VITE_APP_PROXY_URL: string
  VITE_APP_BASE_URL: string
  // More env variables...
}
