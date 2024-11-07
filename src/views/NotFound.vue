<script setup lang="ts">
import StarsBackground from '@/components/StarsBackground.vue'
import RetroBackground from '@/components/RetroBackground.vue'
</script>

<template>
  <main class="mini-game align-center">
    <StarsBackground />
    <h1>404 NOT FOUND</h1>
    <div class="toolbar">
      <span>Score: 0</span>
      <span>Record: 1000</span>
    </div>
    <RetroBackground class="auto" :play="true" />
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
  top: 60px;
  width: 100%;
}
.toolbar {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 20px;
  width: 100%;
}
</style>
