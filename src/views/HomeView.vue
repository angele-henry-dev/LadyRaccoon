<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import FooterComponent from '@/components/FooterComponent.vue'
import LightEffect from '@/components/LightEffect.vue'
import CarouselCards from '@/components/CarouselCards.vue'
import CustomCarousel from '@/components/CustomCarousel.vue'
import IsometricCity from '@/components/IsometricCity.vue'

import { type Skills } from '@/types/Skills'

import skills from '@/assets/models/skills.json' with { type: 'json' }
import projects from '@/assets/models/projects.json' with { type: 'json' }
</script>

<template>
  <main>
    <LightEffect />

    <div id="description" class="align-center">
      <h1>Looking for a <span class="highlight">technical leader</span> to boost your team?</h1>
      <p>
        As a senior software engineer, my main quest is simple: to prevent your project from
        reaching a game over due to a bug-infested application.
      </p>
      <p class="animated-heart">
        <FontAwesomeIcon :icon="faHeart" size="xl" />
      </p>
    </div>

    <div id="skills">
      <h2 title="Skills"><FontAwesomeIcon :icon="faHatWizard" /> Skills at your service</h2>
      <CarouselCards :skills="skills as Skills[]" />
    </div>

    <div id="experience">
      <h2 title="Professional experience">
        <FontAwesomeIcon :icon="faBook" /> Professional experience
      </h2>
      <IsometricCity />
    </div>

    <div id="projects">
      <h2 title="Projects"><FontAwesomeIcon :icon="faDragon" /> Projects</h2>
      <CustomCarousel :items="projects" />
    </div>
  </main>

  <FooterComponent />
</template>
