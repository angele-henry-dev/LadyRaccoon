<script setup lang="ts">
import TreeLeave from '@/components/TreeLeave.vue'

import { ref } from 'vue'

// Props
const props = defineProps(['skills'])

// Variables
const years = ref('10')
const days = ref('"278"')
</script>

<template>
  <div class="current-level">
    <span>Level {{ years }} (years)</span>
    <div class="range"></div>
  </div>
  <div class="skills-container">
    <div v-for="(item, i) in props.skills" :key="i" :class="`tree-container ${item.type}`">
      <h3>{{ item.type }}</h3>
      <TreeLeave :skills="item.skills" :parent="true" />
    </div>
  </div>
</template>

<style scoped>
.current-level {
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Orbitron', monospace;
}

.skills-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
.tree-container {
  min-width: fit-content;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
}

.range {
  --p: 60;
  position: relative;
  margin: auto;
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
  width: 100%;
  max-width: 300px;
  height: 15px;
  transform: skew(30deg);
  font-family: 'Orbitron', monospace;

  &:before {
    --width: calc(var(--p) * 1%);

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--vt-c-yellow);
    z-index: 0;
    animation:
      load 0.5s forwards linear,
      glitch 2s infinite linear;
  }

  &:after {
    counter-reset: progress var(--p);
    content: v-bind(days) '/365';
    color: #000;
    font-size: 0.75rem;
    margin-top: 1px;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%) skewX(-30deg);
    z-index: 1;
  }
}

@keyframes load {
  to {
    width: var(--width);
  }
}

@keyframes glitch {
  0%,
  5% {
    transform: translate(0, 0);
  }
  1% {
    transform: translate(-2.5%, -5%);
  }
  2% {
    transform: translate(5%, 15%);
  }
  3% {
    transform: translate(-21%, 5%);
  }
  4% {
    transform: translate(1%, -11%);
  }
}
</style>
