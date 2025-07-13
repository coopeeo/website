<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
defineProps<{
  src: OptimizedImage
}>()

export type OptimizedImage = {
  webp?: string
  avif?: string
  fallback: string
}

// it keeps removing the semicolon so i added this so syntax highlighting works lmao
</script>

<template>
  <picture v-bind="$attrs">
    <source v-if="src.avif" :srcset="src.avif" type="image/avif" />
    <source v-if="src.webp" :srcset="src.webp" type="image/webp" />
    <img :src="src.fallback" class="image-item-fallback" />
  </picture>
</template>

<style scoped>
picture > img.image-item-fallback {
  width: 100%;
  height: 100%;
  object-fit: inherit;
  display: block;
}
</style>
