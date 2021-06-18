import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import Components from 'vite-plugin-components'

import matter from 'gray-matter'

// https://vitejs.dev/config/
export const userConfig = defineConfig({
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),
    JSX({
      optimize: true,
      enableObjectSlots: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })

        return route
      },
    }),
    Markdown(),
    Components({
      extensions: ['vue', 'md'],
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '/#',
        replacement: resolve(__dirname, './types'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
