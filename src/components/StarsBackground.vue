<script setup lang="ts">
import { ref } from 'vue'

const stars = ref([
  { left: '5%', top: '55%', delay: '2s', scale: 2 },
  { left: '7%', top: '5%', delay: '0s', scale: 2 },
  { left: '10%', top: '45%', delay: '1s', scale: 1 },
  { left: '12%', top: '35%', delay: '3s', scale: 1 },
  { left: '15%', top: '39%', delay: '0s', scale: 1 },
  { left: '20%', top: '10%', delay: '3s', scale: 1 },
  { left: '35%', top: '50%', delay: '0s', scale: 2 },
  { left: '40%', top: '16%', delay: '1s', scale: 2 },
  { left: '43%', top: '28%', delay: '1s', scale: 1 },
  { left: '45%', top: '30%', delay: '0s', scale: 3 },
  { left: '55%', top: '18%', delay: '2s', scale: 1 },
  { left: '60%', top: '23%', delay: '0s', scale: 1 },
  { left: '62%', top: '44%', delay: '0s', scale: 2 },
  { left: '67%', top: '27%', delay: '2s', scale: 1 },
  { left: '75%', top: '10%', delay: '0s', scale: 2 },
  { left: '80%', top: '25%', delay: '3s', scale: 1 },
  { left: '83%', top: '57%', delay: '2s', scale: 1 },
  { left: '90%', top: '29%', delay: '0s', scale: 2 },
  { left: '95%', top: '5%', delay: '3s', scale: 1 },
  { left: '96%', top: '72%', delay: '0s', scale: 1 },
  { left: '98%', top: '70%', delay: '2s', scale: 3 }
])
</script>

<template>
  <div class="retrobg-stars">
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="retrobg-star"
      :style="{
        left: star.left,
        top: star.top,
        animationDelay: star.delay,
        transform: `scale(${star.scale})`
      }"
    ></div>
  </div>
</template>

<style scoped>
.retrobg-stars {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.retrobg-star {
  position: absolute;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  background-color: var(--vt-c-white-mute);
  animation: twinkle 3s infinite;
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}
</style>
