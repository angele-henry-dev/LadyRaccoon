<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Methods
function getCurrentYear() {
  return new Date().getFullYear()
}
</script>

<template>
  <footer>
    <p>
      <RouterLink to="/legal-notice">Legal notice</RouterLink>
      <span class="separator">&#8226;</span>
      <RouterLink to="/privacy-policy">Privacy policy</RouterLink>
      <span class="separator">&#8226;</span>
      <RouterLink to="/sitemap">Sitemap</RouterLink>
      <span class="separator">&#8226;</span>
      <a
        role="button"
        href="https://github.com/angele-henry-dev"
        target="_blank"
        title="Opens Github in a new tab or window"
      >
        <FontAwesomeIcon :icon="faSquareGithub" size="xl" />
      </a>
      <a
        role="button"
        href="https://www.linkedin.com/in/angele-henry/"
        target="_blank"
        title="Opens LinkedIn in a new tab or window"
      >
        <FontAwesomeIcon :icon="faLinkedin" size="xl" />
      </a>
    </p>
    <p>Font 'OpenDyslexic' by Abelardo Gonzalez.</p>
    <p>
      Handcrafted with
      <FontAwesomeIcon :icon="faHeart" class="pink" />
      <span class="separator">&#8226;</span>
      Copyright
      <FontAwesomeIcon :icon="faCopyright" />
      {{ getCurrentYear() }} Lady Raccoon - All rights reserved
    </p>
  </footer>
</template>
