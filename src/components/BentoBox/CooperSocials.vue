<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Social {
  platform: string
  suffix?: string
  icon: string
  url?: string
}

const socials = ref(<Social[]>[
  { platform: 'twitter', icon: 'mdi-twitter', url: 'https://twitter.com/@coop_eeo' },
  {
    platform: 'bluesky',
    suffix: '.xyz',
    icon: 'fa7-brands:bluesky',
    url: 'https://bsky.app/profile/coopeeo.xyz',
  },
  { platform: 'github', icon: 'mdi-github', url: 'https://github.com/coopeeo' },
  { platform: 'steam', icon: 'mdi-steam', url: 'https://steamcommunity.com/id/coopeeo' },
  { platform: 'youtube', icon: 'mdi-youtube', url: 'https://www.youtube.com/@coopeeo' },
  { platform: 'instagram', icon: 'mdi-instagram', url: 'https://www.instagram.com/coopeeo/' },
  { platform: 'twitch', icon: 'mdi-twitch', url: 'https://www.twitch.tv/coopeeo' },
  {
    platform: 'discord',
    icon: 'fa7-brands:discord',
    url: 'https://discord.com/users/594864203102158859',
  },
])
const socialIndex = ref(0)
let socialDebounce: boolean = false
const nextSocial = () => {
  if (socialDebounce) return
  socialDebounce = true
  setTimeout(() => {
    socialIndex.value = (socialIndex.value + 1) % socials.value.length
  }, 300)
  setTimeout(() => {
    socialDebounce = false
  }, 400)
}
</script>

<template>
  <div class="social-container">
    <div class="social-title">Socials</div>
    <!-- prettier-ignore -->
    <a target="_blank" :href="socials[socialIndex].url" class="social-handle" :data-platform="socials[socialIndex].platform" @pointerleave="nextSocial">
      <div class="social-prefix">@</div>
      coop<div class="underscore">_</div><span class="ending2">eeo</span><span class="ending">eeo</span>
      <div class="social-suffix">{{ socials[socialIndex].suffix }}<Icon class="social-icon" :icon="socials[socialIndex].icon" /></div>
    </a>
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
.social-suffix {
  --y-offset: -27px;
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  font-size: 7rem;
  transform: translateY(var(--y-offset));
  color: mocha.$text !important;
  z-index: -1;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  .social-handle:hover > & {
    transform: translateX(120px) translateY(var(--y-offset));
    color: mocha.$rosewater;
  }
  .social-handle[data-platform='bluesky']:hover > & {
    transform: translateX(315px) translateY(var(--y-offset));
  }
  .social-handle[data-platform='twitter']:hover > & {
    transform: translateX(calc(120px + 63px)) translateY(var(--y-offset));
  }
  .social-handle[data-platform='discord']:hover > & {
    transform: translateX(150px) translateY(var(--y-offset));
  }
}
.underscore {
  display: inline;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
  .social-handle[data-platform='twitter']:hover > & {
    opacity: 1;
  }
}
.ending2 {
  opacity: 0;
  visibility: hidden;
}
.ending {
  --x-offset: 274px;
  position: absolute;
  background-color: transparent;
  z-index: 1;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  left: 0;
  transform: translateX(var(--x-offset));
  color: mocha.$text;
  transition: transform 0.3s ease;
  .social-handle[data-platform='twitter']:hover > & {
    transform: translateX(calc(var(--x-offset) + 63px));
  }
}
.social-icon {
  transform: translateY(0.5rem);
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
