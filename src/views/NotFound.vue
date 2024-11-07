<script setup lang="ts">
import StarsBackground from '@/components/StarsBackground.vue'
import RetroBackground from '@/components/RetroBackground.vue'
</script>

<template>
  <main class="mini-game align-center">
    <StarsBackground />
    <h1>404 NOT FOUND</h1>
    <RetroBackground class="auto" />
  </main>
</template>

<style scoped>
.mini-game {
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
h1 {
  position: absolute;
  top: 50px;
  width: 100%;
}
</style>
