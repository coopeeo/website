<script setup lang="ts">
defineProps<{
  dog: Dog
}>()

type Dog = 'giddy' | 'orion'
type DogInfo = {
  name: string
  born: Date
  breed: string
  // Pronouns are optional, but can be included for more personalization
  // If you want to add pronouns, you can use the following type:
  pronouns?: 'he/him' | 'she/her' | 'they/them' | 'any' | 'non-binary'
  image: OptimizedImage
}

import GiddyPhoto from '@/assets/dogs/giddy.jpeg?optimized'
import OrionPhoto from '@/assets/dogs/orion.jpeg?optimized'
import PictureItem, { type OptimizedImage } from '../PictureItem.vue'

const dogInfo: Record<Dog, DogInfo> = {
  giddy: {
    name: 'Giddy',
    born: new Date('2022-03-28'),
    breed: 'Golden Doodle',
    pronouns: 'she/her',
    image: GiddyPhoto,
  },
  orion: {
    name: 'Orion',
    born: new Date('2018-10-11'),
    breed: 'Standard Poodle',
    pronouns: 'he/him',
    image: OrionPhoto,
  },
}
</script>

<template>
  <div class="dog-container">
    <PictureItem
      :src="dogInfo[dog].image"
      alt="Image of {{ dogInfo[dog].name }}"
      class="dog-image"
    />
    <div class="dog-info">
      <h3 class="name">{{ dogInfo[dog].name }}</h3>
      <div class="age">
        {{
          Math.floor(
            (new Date().getTime() - dogInfo[dog].born.getTime()) / (1000 * 60 * 60 * 24 * 365),
          )
        }}
        {{ dogInfo[dog].born.getFullYear() === new Date().getFullYear() ? 'year' : 'years' }} old
      </div>
      <div class="breed">{{ dogInfo[dog].breed }}</div>
      <div v-if="dogInfo[dog].pronouns" class="pronouns">{{ dogInfo[dog].pronouns }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

.dog-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
}

.dog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transition: transform 0.3s ease;
  pointer-events: none;
}
.dog-image :deep(img) {
  transition: transform 0.3s ease;
}

.dog-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, mocha.$mantle);
  color: white;
  padding: 1.5em 1em 1em;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
}

.dog-container:hover .dog-info,
.dog-container:active .dog-info {
  transform: translateY(0);
}

.dog-container:hover .dog-image :deep(img),
.dog-container:active .dog-image :deep(img) {
  transform: scale(1.05);
}

.name {
  font-size: 1.5em;
  margin: 0 0 0.5em 0;
  font-weight: bold;
}

.age,
.breed .pronouns {
  margin: 0.2em 0;
  opacity: 0.9;
}
</style>
