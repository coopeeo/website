<script setup lang="ts">
// omg hello world
</script>

<template>
  <main>
    <div class="bento-item">Music</div>
    <div class="bento-item">Image</div>
    <div class="bento-item">Games</div>
    <div class="bento-item">Languages</div>
    <div class="bento-item">Image</div>
    <div class="bento-item">
      <h1 class="intro">
        Hi, I'm
        <div class="name">Cooper</div>
      </h1>
      <div class="tagline">
        I am your friendly person wanting to be <span>a decent developer</span>
      </div>
    </div>
    <div class="bento-item">Image</div>
    <div class="bento-item">More About Me</div>
    <div class="bento-item">More About Me</div>
    <div class="bento-item">More About Me</div>
    <div class="bento-item">More About Me</div>
    <div class="bento-item">More About Me</div>
    <div class="bento-item">Giddy</div>
    <div class="bento-item">Meet the Dogs</div>
    <div class="bento-item">Orion</div>
    <div class="bento-item">Socials</div>
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
  grid-column: 2 / span 3;
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
/* Meet the Dogs */
.bento-item:nth-child(14) {
  grid-column: span 3;
}
.bento-item:nth-child(16) {
  grid-column: span 5;
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
}

.bento-item:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.5),
    0 6px 18px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.intro > .name {
  display: inline-block;
  background: linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #f472b6, #9333ea, #e879f9);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: bold;
  animation: gradientMove 6s linear infinite;
  transition: animation-duration 0.3s ease;
}

.bento-item:hover > .intro > .name {
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
