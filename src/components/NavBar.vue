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

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  text-decoration: none;
  color: #fff;
}
nav a.is-active {
  color: #958;
  font-weight: bold;
}
</style>
