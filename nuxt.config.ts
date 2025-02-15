import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开启SSR
  ssr: true,

  // 模块
  modules: [
    '@pinia/nuxt',          // 状态管理
    '@nuxtjs/tailwindcss',  // CSS框架
    '@vueuse/nuxt',         // 实用工具集
  ],

  // 应用配置
  app: {
    head: {
      title: '百姓网-分类信息',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },

  // 运行时配置
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000'
    }
  },

  // CSS
  css: [
    '@/assets/css/main.css'
  ],

  // 开发环境配置
  devtools: { enabled: true },

  compatibilityDate: '2025-02-15',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})