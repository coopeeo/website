<script setup lang="ts">
import { useRoute } from 'vue-router'
import posts from '@/assets/blog/posts.json'

const route = useRoute()
const post = posts.posts[Number(route.params.id) - 1]
</script>

<template>
  <main>
    <h1>{{ post.title }}</h1>
    <p>{{ new Date(post.date).toLocaleDateString() }}</p>
    <div v-html="post.content"></div>
  </main>
</template>
