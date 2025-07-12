<script setup lang="ts">
defineProps<{
  msg: 'orion' | 'giddy'
}>()
</script>

<template>
  <div>{msg}</div>
</template>
