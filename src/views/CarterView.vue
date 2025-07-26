<script setup lang="ts"></script>

<template>
  <main>
    <div class="bento-item music">
      <h3>Music</h3>
      <div>Meme songs</div>
    </div>
    <div class="bento-item image">Stuff</div>
    <div class="bento-item games">
      <h3>Games</h3>
      <div>Roblox, Minecraft, Mobile Games, Geometry Dash</div>
    </div>
    <div class="bento-item languages">
      <h3>Languages</h3>
      <div>English</div>
    </div>
    <div class="bento-item image">Carter</div>
    <div class="bento-item introduction">
      <h1 class="intro">
        Hi, I'm
        <div class="name">Carter</div>
      </h1>
      <div class="tagline">I am your friendly person with albinism</div>
    </div>
    <div class="bento-item image">Carter</div>
    <div class="bento-item pronouns">he/him</div>
    <div class="bento-item more-about-me">
      I have ADHD and Albinism, I am also addicted to video games and youtube
    </div>
    <div class="bento-item socials">
      Socials
      <div>CarCar, Cart_O</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@catppuccin/palette/scss/mocha';

main {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(4);
  color: #fff;
}

/* Name */
.bento-item.introduction {
  display: grid;
  grid-column: span 3;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  gap: 0px;
}
/* Music */
.bento-item.music {
  grid-column: span 2;
}
/* Games */
.bento-item.games {
  grid-column: span 2;
}
/* Languages */
.bento-item.languages {
  grid-column: span 5;
}

/* More About Me */
.bento-item.pronouns {
  grid-column: span 2;
}
.bento-item.more-about-me {
  grid-column: span 3;
}
/* Socials */
.bento-item.socials {
  grid-column: span 5;
  user-select: none;
}

/* Images of Carter */
.bento-item.image {
  padding: 0;
}

.bento-item {
  color: mocha.$text;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: mocha.$base;
  border-radius: 14px;
  margin: 0.3rem;
  border: 0.1vh solid mocha.$mantle;
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  user-select: none;
}

.bento-item:hover,
.bento-item:active {
  transform: translateY(-2px);
  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.5),
    0 6px 18px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.intro > .name {
  display: inline-block;
  background: linear-gradient(45deg, #8b5cf6, #812ca3, #a855f7, #771f83, #9333ea, #8c199e);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: bold;
  animation: gradientMove 6s linear infinite;
  transition: animation-duration 0.3s ease-in-out;
}

.bento-item:hover > .intro > .name,
.bento-item:active > .intro > .name {
  animation-duration: 3s;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}
</style>
