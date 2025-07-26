<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Social {
  platform: string
  handle: string
  icon: string
  url?: string
}

const socials = ref(<Social[]>[
  { platform: 'twitter', handle: '@coopeeo', icon: 'mditwitter' },
  { platform: 'bluesky', handle: '@coopeeo.xyz', icon: 'fa7-brands:bluesky' },
])
const socialIndex = ref(0)
</script>

<template>
  <div class="social-container">
    <div class="social-title">Socials</div>
    <!-- prettier-ignore -->
    <div class="social-handle" :data-platform="socials[socialIndex].platform" @pointerleave="() => socialIndex = socialIndex === (socials.length - 1) ? 0 : socialIndex + 1">
      <div class="social-prefix">@</div>
      coop<div class="underscore">_</div>eeo
      <div class="social-icon"><Icon :icon="socials[socialIndex].icon" /></div>
    </div>
    <div class="credits">
      Credit for the socials idea: <a target="_blank" href="https://pa.nley.contact">Panley</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

.social-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: mocha.$text;
  margin-bottom: -1.75rem;
}
.social-prefix {
  position: absolute;
  display: inline;
  z-index: -1;
}
.social-icon {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: mocha.$text;
  z-index: -1;
}
.underscore {
  display: inline;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
.social-handle {
  color: mocha.$text;
  font-size: 7.875rem;
  position: relative;
  display: inline;
  background-color: mocha.$base;
  z-index: 2;
}
.credits {
  font-size: 0.875rem;
  color: mocha.$subtext0;
}
</style>
