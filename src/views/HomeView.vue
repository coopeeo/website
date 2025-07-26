<script setup lang="ts">
import DogItem from '@/components/BentoBox/DogBentoBoxItem.vue'
import CooperImageItem from '@/components/BentoBox/CooperImageBentoBoxItem.vue'
</script>

<template>
  <main>
    <div class="bento-item music">
      <h3>Music</h3>
      <div>Hatsune Miku, Kendrick Lamar, Chappel Roan, Sabrina Carpenter</div>
    </div>
    <div class="bento-item image"><CooperImageItem img="top" /></div>
    <div class="bento-item games">
      <h3>Games</h3>
      <div>Minecraft, Cult of the Lamb, Roblox, Balatro, Portal, Garry's Mod</div>
    </div>
    <div class="bento-item languages">
      <h3>Languages</h3>
      <div>JavaScript, TypeScript, Python, C++, C, Vue (what this website is made in!), Lua</div>
    </div>
    <div class="bento-item image"><CooperImageItem img="nameleft" /></div>
    <div class="bento-item introduction">
      <h1 class="intro">
        Hi, I'm
        <div class="name">Cooper</div>
      </h1>
      <div class="tagline">
        I am your friendly person wanting to be <span>a decent developer</span>
      </div>
    </div>
    <div class="bento-item image"><CooperImageItem img="nameright" /></div>
    <div class="bento-item pronouns">
      he/they/any<br />Questioning<br />Non Binary<br />Transgender? (if you count non-binary as
      transitioning.)
    </div>
    <div class="bento-item more-about-me">
      I have ADHD (the inattentive and hyperactive types), Autism (Not Sure, TBD when getting
      tested). I also have a great mother and father who take care of me, as well as a great nana
      (grandmother). I also have an amazing brother with ADHD and albinism (the kind that includes
      vision issues).
    </div>
    <div class="bento-item dog"><DogItem dog="giddy" /></div>
    <div class="bento-item dogs-title"><h1 class="dog-title">Meet the Dogs</h1></div>
    <div class="bento-item dog"><DogItem dog="orion" /></div>
    <div class="bento-item socials">
      Socials
      <div>@coopeeo anywhere<br />Twitter: coop_eeo<br />Bluesky: @coopeeo.xyz</div>
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
/* Meet the Dogs */
.bento-item.dogs-title {
  display: grid;
  grid-column: span 3;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
}

/* More About Me */
.bento-item.pronouns {
  grid-column: span 2;
}
.bento-item.more-about-me {
  grid-column: span 3;
}

.bento-item.dog {
  display: flex;
  padding: 0;
}
/* Socials */
.bento-item.socials {
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
  background: linear-gradient(45deg, #8b5cf6, #ec4899, #a855f7, #f472b6, #9333ea, #e879f9);
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
