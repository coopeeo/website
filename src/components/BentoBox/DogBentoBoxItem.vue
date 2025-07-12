<script setup lang="ts">
defineProps<{
  dog: Dog
}>()

type Dog = 'giddy' | 'orion'
type DogInfo = {
  name: string
  born: Date
  breed: string
  image?: string
}

import GiddyPhoto from '@/assets/dogs/giddy.jpeg?inline'
import OrionPhoto from '@/assets/dogs/orion.jpeg?inline'

const dogInfo: Record<Dog, DogInfo> = {
  giddy: {
    name: 'Giddy',
    born: new Date('2022-03-28'),
    breed: 'Golden Doodle',
    image: GiddyPhoto,
  },
  orion: {
    name: 'Orion',
    born: new Date('2018-10-11'),
    breed: 'Poodle',
    image: OrionPhoto,
  },
}
</script>

<template>
  <div class="dog-container">
    <img :src="dogInfo[dog].image" alt="Image of {{ dogInfo[dog].name }}" class="dog-image" />
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
    </div>
  </div>
</template>

<style scoped>
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
}

.dog-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
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

.dog-container:hover .dog-info {
  transform: translateY(0);
}

.dog-container:hover .dog-image {
  transform: scale(1.05);
}

.name {
  font-size: 1.5em;
  margin: 0 0 0.5em 0;
  font-weight: bold;
}

.age,
.breed {
  margin: 0.2em 0;
  opacity: 0.9;
}
</style>
