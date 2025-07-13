<script setup lang="ts">
import router from '@/router';
const routes = router.getRoutes();
</script>

<template>
  <nav>
      <div v-for="route in routes" :key="route.path">
        <RouterLink :class="{'is-active': route.path === router.currentRoute.value.path}" :to="route.path">{{ route.name }}</RouterLink>
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
