<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import ContactAside from '@/components/ContactAside.vue'

// Methods
function getCurrentYear() {
  return new Date().getFullYear()
}
</script>

<template>
  <ContactAside />
  <header>
    <img
      title="Lady Raccoon"
      alt="Lady Raccoon"
      class="logo"
      src="@/assets/lady_raccoon.png"
      width="80"
      height="51.63"
    />
    <div class="wrapper">
      <nav>
        <RouterLink class="static" to="/">Lady Raccoon</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>
      <RouterLink to="/legal-notice">Legal notice</RouterLink>
      <span class="separator">&#8226;</span>
      <RouterLink to="/privacy-policy">Privacy policy</RouterLink>
      <span class="separator">&#8226;</span>
      <RouterLink to="/sitemap">Sitemap</RouterLink>
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
