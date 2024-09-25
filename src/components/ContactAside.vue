<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <div id="lateral-left">
    <div class="box-vl">
      <div class="vl"></div>
    </div>
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
  </div>
</template>
