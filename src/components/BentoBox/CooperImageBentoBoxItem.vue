<script setup lang="ts">
defineProps<{
  img: CooperImage
}>()

type CooperImage = 'top' | 'nameleft' | 'nameright'

type CooperImageInfo = {
  image: OptimizedImage
  alt: string
}

import TopPhoto from '@/assets/me/top.jpeg?optimized'
import NameLeftPhoto from '@/assets/me/nameleft.jpeg?optimized'
import NameRightPhoto from '@/assets/me/nameright.jpeg?optimized'
import Picture, { type OptimizedImage } from '@/components/PictureItem.vue'

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
    <Picture
      :src="images[img].image"
      :alt="images[img].alt"
      :title="images[img].alt"
      class="cooper-image"
      loading="lazy"
    />
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
