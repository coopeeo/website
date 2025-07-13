<script setup lang="ts">
defineProps<{
  items: Item[]
}>()

type Item = {
  title: string
  link?: string
  image: string
}
</script>

<template>
  <div class="carousel-container"></div>
</template>

<style scoped></style>
