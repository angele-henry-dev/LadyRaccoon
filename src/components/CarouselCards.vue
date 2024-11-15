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
      :class="[index === 0 && active ? 'active' : '', 'card']"
    >
      <div class="card-title">
        <h2>{{ item.type }}</h2>
      </div>
      <div class="card-inner">
        <ul>
          <li v-for="(skill, index) in item.skills" :key="index" class="parent">
            {{ skill.title }}
            <ul class="children">
              <li v-for="(child, j) in skill.children" :key="j">{{ child.title }}</li>
            </ul>
          </li>
        </ul>
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
</style>
