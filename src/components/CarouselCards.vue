<script setup lang="ts">
import CarouselCard from '@/components/CarouselCard.vue'
import { ref } from 'vue'

// Variables
let selectedIndex = ref(4)

// Props
const props = defineProps(['skills'])

// Mthodes
function setSelectedIndex(index: number) {}
</script>

<template>
  <div class="cards-container">
    <div class="cards-line">
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="index"
        v-bind:class="`cloned${index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
        @click="setSelectedIndex(index)"
      />
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="props.skills.length + index"
        v-bind:class="`${props.skills.length + index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
        @click="setSelectedIndex(props.skills.length + index)"
      />
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="props.skills.length * 2 + index"
        v-bind:class="`cloned${props.skills.length * 2 + index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
        @click="setSelectedIndex(props.skills.length * 2 + index)"
      />
    </div>
  </div>
</template>

<style scoped>
@media (width > 48em) {
  .cards-container {
    --card-width: 360px;
  }
}
@media (width > 48em) {
  .cards-container {
    --card-height: 480px;
  }
}
@media (width > 20.3125em) {
  .cards-container {
    --card-width: 315px;
  }
}
@media (width < 47.99em) {
  .cards-container {
    --card-height: 420px;
  }
}
.cards-container {
  --gap: 10px;
  position: relative;
  width: 100%;
  height: calc(var(--card-height));
  margin-bottom: 50px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}
.cards-line {
  position: absolute;
  left: -100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
