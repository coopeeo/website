<script setup lang="ts"></script>

<template>
  <main>
    <div class="bento-item">
      <h3>Music</h3>
      <div>Meme songs</div>
    </div>
    <div class="bento-item image">Stuff</div>
    <div class="bento-item">
      <h3>Games</h3>
      <div>Roblox, Minecraft, Mobile Games, Geometry Dash</div>
    </div>
    <div class="bento-item">
      <h3>Languages</h3>
      <div>English</div>
    </div>
    <div class="bento-item image">Carter</div>
    <div class="bento-item">
      <h1 class="intro">
        Hi, I'm
        <div class="name">Carter</div>
      </h1>
      <div class="tagline">I am your friendly person with albimism</div>
    </div>
    <div class="bento-item image">Carter</div>
    <div class="bento-item">he/him</div>
    <div class="bento-item">
      I have ADHD and Albinism, I am also addicted to video games and youtube
    </div>
    <div class="bento-item">
      Socials
      <div>CarCar, Cart_O</div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(4);
  color: #fff;
}

/* Name */
.bento-item:nth-child(6) {
  display: grid;
  grid-column: span 3;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  gap: 0px;
}
/* Music */
.bento-item:nth-child(1) {
  grid-column: span 2;
}
/* Games */
.bento-item:nth-child(3) {
  grid-column: span 2;
}
/* Languages */
.bento-item:nth-child(4) {
  grid-column: span 5;
}

/* More About Me */
.bento-item:nth-child(8) {
  grid-column: span 2;
}
.bento-item:nth-child(9) {
  grid-column: span 3;
}
/* Socials */
.bento-item:nth-child(10) {
  grid-column: span 5;
  user-select: none;
}

/* Images of Cooper */
.bento-item.image {
  padding: 0;
}

.bento-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #222;
  border-radius: 14px;
  margin: 0.3rem;
  border: 0.1vh solid #000;
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

.dog-title {
  background: linear-gradient(
    45deg,
    #e4d374,
    #dbcd79,
    #dbd678,
    #d4cd69,
    #a1ac64,
    #c8cf76,
    #b6be56,
    #c1c781,
    #b5b989,
    #ffffff,
    #ffffff,
    #919191,
    #dbd9db,
    #171718,
    #171718,
    #171718,
    #1a1a1b,
    #1a1a1b,
    #3b3b3d,
    #121213,
    #121213,
    #121213
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: bold;
  animation: dogGradientMove 6s ease-in-out infinite;
  transition: all 0.3s ease-in-out;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
  padding: 1rem;
  width: 100%;
  height: 100%;
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

@keyframes dogGradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  55% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
