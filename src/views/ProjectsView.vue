<script setup lang="ts">
import ProjectItem, { type ProjectItemProps } from '@/components/ProjectItem.vue'
const projects: ProjectItemProps[] = [
  {
    title: 'wretch',
    description: 'A fetch program for your system!',
    url: 'https://github.com/thesillyboi/wretch',
  },
  {
    title: 'National Weather Service Slack Bot',
    description: 'A Slack bot that provides weather updates.',
    url: 'https://github.com/coopeeo/nws-slack-bot',
  },
  {
    title: 'My Website',
    description: 'This website your reading right now!',
    url: 'https://github.com/coopeeo/website',
  },
]
</script>

<template>
  <main>
    <ProjectItem
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :url="project.url"
    />
  </main>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

main {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 1rem;
  color: mocha.$text;
}
</style>
