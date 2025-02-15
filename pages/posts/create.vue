<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">发布信息</h1>
    
    <form @submit.prevent="submitPost" class="space-y-6">
      <!-- 分类选择 -->
      <div>
        <label class="block mb-2">选择分类</label>
        <select v-model="form.categoryId" class="w-full p-2 border rounded">
          <option v-for="category in categories" 
                  :key="category.id" 
                  :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>

      <!-- 标题 -->
      <div>
        <label class="block mb-2">标题</label>
        <input v-model="form.title" 
               type="text" 
               class="w-full p-2 border rounded"
               required>
      </div>

      <!-- 描述 -->
      <div>
        <label class="block mb-2">详细描述</label>
        <textarea v-model="form.description" 
                  class="w-full p-2 border rounded h-32"
                  required></textarea>
      </div>

      <!-- 价格 -->
      <div>
        <label class="block mb-2">价格</label>
        <input v-model="form.price" 
               type="number" 
               class="w-full p-2 border rounded"
               required>
      </div>

      <!-- 图片上传 -->
      <div>
        <label class="block mb-2">上传图片</label>
        <input type="file" 
               @change="handleImageUpload" 
               accept="image/*" 
               multiple
               class="w-full p-2 border rounded">
      </div>

      <button type="submit" 
              class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        发布信息
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const categories = ref([
  { id: 1, name: '房屋租赁' },
  { id: 2, name: '二手物品' },
  { id: 3, name: '招聘求职' },
  { id: 4, name: '本地服务' },
])

const form = ref({
  categoryId: '',
  title: '',
  description: '',
  price: '',
  images: [] as File[]
})

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    form.value.images = Array.from(input.files)
  }
}

const submitPost = async () => {
  try {
    // TODO: 实现API调用，发送表单数据到后端
    console.log('提交的数据：', form.value)
    // 成功后跳转
    navigateTo('/posts')
  } catch (error) {
    console.error('发布失败：', error)
  }
}
</script> 