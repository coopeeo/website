<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const socials = ref([
  { platform: 'Twitter', handle: '@coopeeo' },
  { platform: 'Bluesky', handle: '@coopeeo.xyz' },
])
</script>

<template>
  <div class="socials-container">
    <h3>Socials</h3>
    <div class="socials">coopeeo</div>
    <div>
      Credit for the socials idea: <a target="_blank" href="https://pa.nley.contact">Panley</a>
    </div>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
