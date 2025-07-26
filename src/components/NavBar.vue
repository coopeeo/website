<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navRoutes = computed(() => {
  return router.getRoutes().filter((route) => {
    if (route.path.includes(':')) return false
    if (!route.name) return false
    if (route.path.split('/').length > 2) return false

    return true
  })
})

const isActiveRoute = (routePath: string) => {
  if (routePath === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(routePath)
}
</script>

<template>
  <nav>
    <div v-for="navRoute in navRoutes" :key="navRoute.path">
      <RouterLink :class="{ 'is-active': isActiveRoute(navRoute.path) }" :to="navRoute.path">
        {{ navRoute.name }}
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

nav {
  display: flex;
  gap: 1rem;
}
nav a {
  text-decoration: none;
  transition:
    color 0.4s ease,
    font-weight 0.4s ease;
  color: mocha.$text;
}
nav a.is-active {
  color: mocha.$rosewater;
  font-weight: bold;
}
</style>
