<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import FooterComponent from '@/components/FooterComponent.vue'
import CarouselCards from '@/components/CarouselCards.vue'
import IsometricCity from '@/components/IsometricCity.vue'
import StarsBackground from '@/components/StarsBackground.vue'
import RetroBackground from '@/components/RetroBackground.vue'
import CarouselSlider from '@/components/CarouselSlider.vue'

import { type Skills } from '@/types/Skills'

import skills from '@/assets/models/skills.json' with { type: 'json' }
import projects from '@/assets/models/projects.json' with { type: 'json' }
</script>

<template>
  <main>
    <StarsBackground />

    <div id="description" class="inBetween align-center">
      <h1 class="main-title">
        Looking for a
        <div class="main-title-container highlight">
          <div class="main-title-container__">
            <ul class="main-title-container__list">
              <li class="main-title-container__list__item">senior</li>
              <li class="main-title-container__list__item">lead</li>
              <li class="main-title-container__list__item">fullstack</li>
              <li class="main-title-container__list__item">frontend</li>
              <li class="main-title-container__list__item">backend</li>
            </ul>
          </div>
          <div class="main-title-container__text">developer</div>
        </div>
        to boost your project?
      </h1>
    </div>

    <RetroBackground />

    <div id="skills">
      <h2 class="inBetween" title="Skills">
        <FontAwesomeIcon :icon="faHatWizard" /> Skills at your service
      </h2>
      <CarouselCards class="inBetween" :skills="skills as Skills[]" />
    </div>

    <div id="experience">
      <h2 class="inBetween" title="Professional experience">
        <FontAwesomeIcon :icon="faBook" /> Professional experience
      </h2>
      <IsometricCity class="inBetween" />
    </div>

    <div id="projects">
      <h2 class="inBetween" title="Projects"><FontAwesomeIcon :icon="faDragon" /> Projects</h2>
      <CarouselSlider class="inBetween" :items="projects" />
    </div>

    <FooterComponent class="footer" />
  </main>
</template>

<style scoped>
#skills,
#projects,
#experience {
  padding-top: 80px;
  padding-bottom: 80px;
}
#projects,
#experience {
  border-top: 2px solid var(--vt-c-pink);
}

.content {
  overflow: hidden;
}
.main-title-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  height: 1em;
  width: fit-content;
  margin: auto;
}
.main-title-container .main-title-container__ {
  overflow: hidden;
}
.main-title-container__list {
  padding: 0;
  text-align: center;
  list-style: none;
  animation-name: swipe;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.main-title-container:before {
  content: '[';
  position: absolute;
  left: -30px;
  bottom: 0;
}
.main-title-container:after {
  content: ']';
  position: absolute;
  right: -30px;
  bottom: 0;
}

.main-title-container__list__item,
.main-title-container__text {
  line-height: 1em;
}
@keyframes swipe {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0%, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -20%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, -40%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -60%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, -80%, 0);
  }
}
</style>
