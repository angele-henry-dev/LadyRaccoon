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
  <div ref="container" class="retrobg-stars">
    <div class="shooting-star">
      <div v-for="x in 40" :key="x" class="shooting-star-tail"></div>
    </div>
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

.shooting-star {
  position: absolute;
  top: 50%;
  left: -20px;
  width: 1px;
  height: 1px;
  background-color: #fff;
  opacity: 0.6;
  box-shadow:
    0 0 2px 1px #fff,
    0 0 3px 2px #fff;
  opacity: 1;
  animation: shooting-star-move 30s linear infinite;
  animation-delay: 1s;
}
@keyframes shooting-star-move {
  0% {
    opacity: 1;
    transform: translateX(-20px) translateY(-200px) rotate(70deg);
  }
  7% {
    opacity: 0;
    transform: translateX(1000px) translateY(-600px) rotate(70deg);
  }
  100% {
    opacity: 0;
    transform: translateX(1000px) translateY(-600px) rotate(70deg);
  }
}

@keyframes tail-move {
  0% {
    opacity: 0;
    box-shadow: none;
  }
  25% {
    opacity: 0.5;
    box-shadow:
      0 0 1px 0.5px #fff,
      0 0 1.5px 1px #fff;
  }
  100% {
    opacity: 0;
    box-shadow: none;
    height: 0;
    width: 0;
    transform: translateY(180px);
  }
}

.shooting-star .shooting-star-tail {
  position: absolute;
  width: 1px;
  height: 1px;
  background: white;
}
.shooting-star .shooting-star-tail:nth-child(1) {
  left: -3px;
  animation: 2s tail-move -380ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(2) {
  left: -2px;
  animation: 2s tail-move -566ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(3) {
  left: -3px;
  animation: 2s tail-move -1456ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(4) {
  left: 2px;
  animation: 2s tail-move -18ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(5) {
  left: 2px;
  animation: 2s tail-move -1655ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(6) {
  left: -1px;
  animation: 2s tail-move -1556ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(7) {
  left: 2px;
  animation: 2s tail-move -1286ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(8) {
  left: 2px;
  animation: 2s tail-move -1431ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(9) {
  left: 0px;
  animation: 2s tail-move -210ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(10) {
  left: 1px;
  animation: 2s tail-move -1709ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(11) {
  left: -3px;
  animation: 2s tail-move -1225ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(12) {
  left: 0px;
  animation: 2s tail-move -1495ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(13) {
  left: -1px;
  animation: 2s tail-move -1257ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(14) {
  left: 1px;
  animation: 2s tail-move -647ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(15) {
  left: 3px;
  animation: 2s tail-move -1429ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(16) {
  left: 1px;
  animation: 2s tail-move -704ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(17) {
  left: -2px;
  animation: 2s tail-move -859ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(18) {
  left: 1px;
  animation: 2s tail-move -183ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(19) {
  left: 3px;
  animation: 2s tail-move -541ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(20) {
  left: -2px;
  animation: 2s tail-move -1022ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(21) {
  left: 2px;
  animation: 2s tail-move -1014ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(22) {
  left: -1px;
  animation: 2s tail-move -1785ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(23) {
  left: -1px;
  animation: 2s tail-move -197ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(24) {
  left: 2px;
  animation: 2s tail-move -64ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(25) {
  left: 2px;
  animation: 2s tail-move -1295ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(26) {
  left: 1px;
  animation: 2s tail-move -191ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(27) {
  left: -1px;
  animation: 2s tail-move -1640ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(28) {
  left: 2px;
  animation: 2s tail-move -1291ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(29) {
  left: -3px;
  animation: 2s tail-move -1148ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(30) {
  left: -1px;
  animation: 2s tail-move -1472ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(31) {
  left: 1px;
  animation: 2s tail-move -990ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(32) {
  left: 0px;
  animation: 2s tail-move -1436ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(33) {
  left: 1px;
  animation: 2s tail-move -691ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(34) {
  left: 2px;
  animation: 2s tail-move -1761ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(35) {
  left: 3px;
  animation: 2s tail-move -868ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(36) {
  left: 0px;
  animation: 2s tail-move -1498ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(37) {
  left: -1px;
  animation: 2s tail-move -1343ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(38) {
  left: 0px;
  animation: 2s tail-move -1728ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(39) {
  left: 3px;
  animation: 2s tail-move -1876ms ease-in infinite;
}
.shooting-star .shooting-star-tail:nth-child(40) {
  left: -3px;
  animation: 2s tail-move -967ms ease-in infinite;
}
</style>
