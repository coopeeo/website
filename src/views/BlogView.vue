<script setup lang="ts">
import posts from '@/assets/blog/posts.json'
</script>
<template>
  <main>
    <h1>Blog</h1>
    <div class="posts-container">
      <RouterLink v-for="(post, index) in posts.posts" :key="post.title" :to="`/blog/${index + 1}`">
        <div>
          <h2>{{ post.title }}</h2>
          <p>{{ new Date(post.date).toLocaleDateString() }}</p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.posts-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 1fr));
  gap: 3px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.posts-container > a {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.posts-container > a:hover {
  background: rgba(255, 255, 255, 0.2);
}
.posts-container > a h2 {
  margin: 0;
  font-size: 1.5em;
}
.posts-container > a p {
  margin: 0.5em 0 0;
  font-size: 0.9em;
  color: #ccc;
}
</style>
