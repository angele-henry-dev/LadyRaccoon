<script setup lang="ts">
import { ref } from 'vue'
import { type Skills } from '@/types/Skills'
// Props
interface Props {
  skills: Skills[]
}
const props = defineProps<Props>()

const active = ref(true)
</script>

<template>
  <div class="cards-container">
    <div
      v-for="(item, index) in props.skills"
      :key="index"
      @mouseenter="active = false"
      @mouseleave="active = true"
      :class="[index === 0 && active ? 'active' : '', 'card']"
    >
      <div class="card-title">
        <h2>{{ item.type }}</h2>
      </div>
      <div class="card-inner grow">
        <ul class="grow">
          <li v-for="(skill, index) in item.skills" :key="index" class="parent">
            {{ skill.title }}
            <ul class="children">
              <li v-for="(child, j) in skill.children" :key="j">{{ child.title }}</li>
            </ul>
          </li>
        </ul>
        <div class="footer">
          <div class="stack">
            <span style="--index: 0">HOVER ME</span>
            <span style="--index: 1">HOVER ME</span>
            <span style="--index: 2">HOVER ME</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 50px;
  overflow-x: clip;
}

/** CARD */

.card {
  width: 300px;
  min-height: 320px;
}
.card:not(:first-child) {
  margin-left: -150px;
}

/** INNER CARD */

.card-title h2 {
  border-bottom: 1px solid var(--vt-c-pink);
  text-transform: uppercase;
  font-size: 1em;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.card-inner {
  display: flex;
  flex-direction: column;
}
.card-inner ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.card-inner ul li.parent {
  padding: 5px;
}
.card-inner ul.children {
  height: 0;
  opacity: 0;
  transition: opacity 0.25s;
}
.card-inner .footer {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

/** ON HOVER */

.card.active,
.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
  background-color: var(--vt-c-white-soft);
  color: var(--color-text-oposite);
}
.card.active ~ .card,
.card:hover ~ .card {
  position: relative;
  left: 100px;
  transition: 0.4s ease-out;
}

.card.active .card-inner ul.children,
.card:hover .card-inner ul.children {
  height: fit-content;
  opacity: 1;
  transition: opacity 0.25s 0.25s;
}
.card.active .card-inner ul li.parent,
.card:hover .card-inner ul li.parent {
  border-bottom: 1px dashed var(--vt-c-pink);
  font-weight: bold;
}

.card.active .card-inner .footer,
.card:hover .card-inner .footer {
  opacity: 0;
}

.stack {
  display: grid;
  grid-template-columns: 1fr;
}
.stack span {
  --stack-height: calc(100% / 3 - 1px);
  --inverse-index: calc(calc(3 - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 0.7rem;
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation:
    stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 120ms),
    glitch 2s ease infinite 2s alternate-reverse;
}
.stack span:nth-child(odd) {
  --glitch-translate: 8px;
}
.stack span:nth-child(even) {
  --glitch-translate: -8px;
}
@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow:
      -2px 3px 0 red,
      2px -3px 0 blue;
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow:
      2px -3px 0 red,
      -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }
}
@keyframes glitch {
  0% {
    text-shadow:
      -2px 3px 0 red,
      2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow:
      2px -3px 0 red,
      -2px 3px 0 blue;
  }
  4%,
  100% {
    text-shadow: none;
    transform: none;
  }
}
</style>
