import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'

import matter from 'gray-matter'

export const userConfig = defineConfig({
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),
    JSX({
      optimize: true,
      enableObjectSlots: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
      pagesDir: './src/pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })

        return route
      },
    }),
    Markdown({
      headEnabled: true,
    }),
    ViteComponents({
      extensions: ['vue', 'md'],
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
