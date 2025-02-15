<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">百姓网</NuxtLink>
        
        <div class="flex space-x-4">
          <NuxtLink to="/posts" class="hover:text-blue-500">信息列表</NuxtLink>
          <NuxtLink to="/posts/create" class="hover:text-blue-500">发布信息</NuxtLink>
          <template v-if="!isLoggedIn">
            <NuxtLink to="/login" class="hover:text-blue-500">登录</NuxtLink>
            <NuxtLink to="/register" class="hover:text-blue-500">注册</NuxtLink>
          </template>
          <a v-else @click="logout" class="cursor-pointer hover:text-blue-500">退出</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isLoggedIn = ref(false)

const logout = () => {
  // 实现登出逻辑
}
</script> 