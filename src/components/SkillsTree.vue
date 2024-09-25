<script setup lang="ts">
import TreeLeave from '@/components/TreeLeave.vue'

import { ref } from 'vue'

// Props
const props = defineProps(['skills'])

// Variables
const now = ref(new Date())
const firstDay = ref(new Date('2015-08-05'))
const oneDay = ref(1000 * 60 * 60 * 24)

const startDay = ref(getStartDay())
const endDay = ref(getEndDay())
const level = ref(getLevel())
const experience = ref(getExperience())

// Methods
function getStartDay() {
  const currentYear = now.value.getFullYear()

  const currentYearDate = new Date(firstDay.value)
  currentYearDate.setFullYear(currentYear)

  const previousYearDate = new Date(firstDay.value)
  previousYearDate.setFullYear(currentYear - 1)

  return now.value.valueOf() > currentYearDate.valueOf() ? currentYearDate : previousYearDate
}

function getEndDay() {
  const currentYear = now.value.getFullYear()

  const currentYearDate = new Date(firstDay.value)
  currentYearDate.setFullYear(currentYear)

  const nextYearDate = new Date(firstDay.value)
  nextYearDate.setFullYear(currentYear + 1)

  return now.value.valueOf() < currentYearDate.valueOf() ? currentYearDate : nextYearDate
}

function getLevel() {
  const diff = endDay.value.valueOf() - firstDay.value.valueOf()
  return Math.floor(diff / oneDay.value / 31 / 12)
}

function getExperience() {
  const diff = now.value.valueOf() - startDay.value.valueOf()
  const dayNumber = Math.floor(diff / oneDay.value)
  const totalDays = Math.floor((endDay.value.valueOf() - startDay.value.valueOf()) / oneDay.value)
  return `'${dayNumber}/${totalDays}'`
}
</script>

<template>
  <div class="current-level">
    <span>Level {{ level }} (years)</span>
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
    content: v-bind(experience);
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
