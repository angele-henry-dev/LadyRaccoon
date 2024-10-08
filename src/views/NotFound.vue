<script setup lang="ts">
import { ref } from 'vue'

// Raccoon
const imgStyle = ref({
  bottom: `${Math.floor(Math.random() * 80 + 10)}%`,
  left: `${Math.floor(Math.random() * 80 + 10)}%`
})
const isEscaping = ref(false)
const raccoonCanEscape = ref(true)
// Torch
const torchStyle = ref({
  top: '0px',
  left: '0px'
})

// Functions Raccoon
const raccoonEscape = () => {
  if (!raccoonCanEscape.value) return
  raccoonCanEscape.value = false
  setTimeout(() => {
    isEscaping.value = true
  }, 500)
}
const resetPosition = () => {
  imgStyle.value.bottom = `${Math.floor(Math.random() * 50 + 10)}%`
  imgStyle.value.left = `${Math.floor(Math.random() * 80 + 10)}%`
  isEscaping.value = false
  raccoonCanEscape.value = true
}

// Functions Torch
const moveTorch = (event: { clientY: number; clientX: number }) => {
  torchStyle.value = {
    top: `${event.clientY - 100}px`,
    left: `${event.clientX - 100}px`
  }
}
</script>

<template>
  <div class="not-found" @mousemove="moveTorch">
    <div class="torch" :style="torchStyle"></div>
    <div class="content">
      <h2>404 NOT FOUND</h2>
    </div>
    <div class="container-raccoon">
      <img
        ref="hiddenRaccoon"
        title="Hidden raccoon"
        alt="Hidden raccoon"
        :class="{ 'hidden-raccoon': true, escaping: isEscaping }"
        :style="imgStyle"
        src="/src/assets/images/raccoon_thief.webp"
        width="100px"
        height="101.97px"
        @mouseenter="raccoonEscape"
        @animationend="resetPosition"
      />
    </div>
  </div>
</template>

<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content {
  text-align: center;
  font-size: 3rem;
  position: relative;
  margin-top: 20px;
}

.torch {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 20%, rgba(0, 0, 0, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
}

.container-raccoon {
  width: 100%;
  flex-grow: 1;
  position: relative;
}
.hidden-raccoon {
  position: absolute;
  transition: filter 0.2s ease-in-out;
  cursor: help;
  mix-blend-mode: overlay;
}
.hidden-raccoon.escaping {
  animation: moveRight 2000ms linear;
}
@keyframes moveRight {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(0, -100px);
  }
  12% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(1000px, 0);
  }
}
</style>
