<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

import LightEffect from '@/components/LightEffect.vue'
import SkillsTree from '@/components/SkillsTree.vue'
import CustomCarousel from '@/components/CustomCarousel.vue'
import IsometricCity from '@/components/IsometricCity.vue'

import skills from '@/assets/models/skills.json' with { type: 'json' }
import projects from '@/assets/models/projects.json' with { type: 'json' }
</script>

<template>
  <main>
    <LightEffect />

    <div id="description" class="align-center">
      <h1>Looking for a <span class="highlight">technical leader</span> to boost your team?</h1>
      <p>
        As a senior fullstack developer, my main quest is simple: to prevent your project from
        reaching a game over due to a bug-infested application.
      </p>
      <p class="animated-heart">
        <FontAwesomeIcon :icon="faHeart" />
      </p>
    </div>

    <h2 title="Skills"><FontAwesomeIcon :icon="faHatWizard" /> Skills at your service</h2>
    <div id="skills">
      <SkillsTree :skills="skills" />
    </div>

    <h2 title="Projects"><FontAwesomeIcon :icon="faDragon" /> Projects</h2>
    <div id="projects">
      <CustomCarousel :items="projects" />
    </div>

    <h2 title="Professional experience">
      <FontAwesomeIcon :icon="faBook" /> Professional experience
    </h2>
    <div id="experience">
      <IsometricCity />
    </div>
  </main>
</template>
