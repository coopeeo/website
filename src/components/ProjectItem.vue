<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<ProjectItemProps>()

export type ProjectItemProps = {
  title: string
  description: string
  url: string
}

// here so ide highlighting works
</script>

<template>
  <div class="project-item">
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <a :href="props.url" target="_blank">View Source</a>
  </div>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

.project-item {
  background: mocha.$base;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
  color: mocha.$text;
}
.project-item a {
  color: mocha.$blue;
}
.project-item:hover {
  transform: translateY(-4px);
}
</style>
