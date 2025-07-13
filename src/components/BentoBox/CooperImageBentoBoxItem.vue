<script setup lang="ts">
defineProps<{
  img: CooperImage
}>()

type CooperImage = 'top' | 'nameleft' | 'nameright'

type OptimizedImage = {
  webp?: string
  avif?: string
  fallback: string
}

type CooperImageInfo = {
  image: OptimizedImage
  alt: string
}

import TopPhoto from '@/assets/me/top.jpeg?optimized'
import NameLeftPhoto from '@/assets/me/nameleft.jpeg?optimized'
import NameRightPhoto from '@/assets/me/nameright.jpeg?optimized'

const images: Record<CooperImage, CooperImageInfo> = {
  top: {
    image: TopPhoto,
    alt: 'image of cooper',
  },
  nameleft: {
    image: NameLeftPhoto,
    alt: 'cooper waving',
  },
  nameright: {
    image: NameRightPhoto,
    alt: 'cooper making silly face',
  },
}
</script>

<template>
  <div class="cooper-image-container" :title="images[img].alt">
    <picture>
      <source v-if="images[img].image.avif" :srcset="images[img].image.avif" type="image/avif" />
      <source v-if="images[img].image.webp" :srcset="images[img].image.webp" type="image/webp" />
      <img
        :src="images[img].image.fallback"
        :title="images[img].alt"
        :alt="images[img].alt"
        class="cooper-image"
        loading="lazy"
      />
    </picture>
  </div>
</template>

<style scoped>
.cooper-image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
}
.cooper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: inherit;
  transition: transform 0.3s ease;
  pointer-events: none;
}
</style>
