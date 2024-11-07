<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import ContactAside from '@/components/ContactAside.vue'
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
  <RouterView class="main-content" />
</template>
