<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<ProjectItemProps>()

export type ProjectItemProps = {
  title: string
  description: string
  url: string
}
</script>

<template>
  <div class="project-item">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <a :href="props.url" target="_blank">View Project</a>
  </div>
</template>

<style scoped>
.project-item {
  background: #222;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
}

.project-item:hover {
  transform: translateY(-4px);
}
</style>
