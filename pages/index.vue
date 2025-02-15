<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">欢迎来到百姓网</h1>
    
    <!-- 分类导航 -->
    <div class="grid grid-cols-4 gap-4 mb-8">
      <div v-for="category in categories" 
           :key="category.id" 
           class="p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer">
        {{ category.name }}
      </div>
    </div>
    
    <!-- 最新信息列表 -->
    <div class="bg-white rounded shadow p-4">
      <h2 class="text-xl font-bold mb-4">最新信息</h2>
      <PostList :posts="latestPosts" />
    </div>
  </div>
</template>

<script setup lang="ts">
// 模拟数据
const categories = ref([
  { id: 1, name: '房屋租赁' },
  { id: 2, name: '二手物品' },
  { id: 3, name: '招聘求职' },
  { id: 4, name: '本地服务' },
])

const latestPosts = ref([])

// 获取最新信息
onMounted(async () => {
  // TODO: 从API获取数据
})
</script> 