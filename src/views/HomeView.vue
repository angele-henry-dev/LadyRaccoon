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
      <h1>
        Looking for a
        <span class="highlight"
          ><div class="stack">
            <span style="--index: 0">senior developer</span>
            <span style="--index: 1">senior developer</span>
            <span style="--index: 2">senior developer</span>
          </div></span
        >
        to boost your project?
      </h1>
      <p>
        As a senior software engineer, my main quest is simple: to prevent your project from
        reaching a game over due to a bug-infested application.
      </p>
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
  </main>

  <FooterComponent class="footer" />
</template>

<style scoped>
#projects,
#experience {
  border-top: 2px solid var(--vt-c-pink);
  padding-top: 40px;
}
</style>
