<script setup lang="ts">
import CarouselCard from '@/components/CarouselCard.vue'
import { type Skills } from '@/types/Skills'
import { ref, onMounted, watch } from 'vue'

// Props
interface Props {
  skills: Skills[]
}
const props = defineProps<Props>()

// Refs
const cardsContainer = ref<HTMLElement | null>(null)
let selectedIndex = ref(2)

// Functions
function selectCard(index: number) {
  selectedIndex.value = index
}
function scrollToMiddle(): number {
  if (cardsContainer.value) {
    const middleScrollPosition =
      cardsContainer.value.scrollWidth / 2 - cardsContainer.value.clientWidth / 2
    return middleScrollPosition
  }
  return 0
}

onMounted(() => {
  if (!cardsContainer.value) {
    return
  }
  cardsContainer.value.scrollLeft = scrollToMiddle()
})

// Watch
watch(selectedIndex, (newVal) => {
  if (!cardsContainer.value) {
    return
  }
  switch (newVal) {
    case 0:
      cardsContainer.value.scrollLeft = 0
      break
    case 1:
      cardsContainer.value.scrollLeft = scrollToMiddle() - 150
      break
    case 2:
      cardsContainer.value.scrollLeft = scrollToMiddle()
      break
    case 3:
      cardsContainer.value.scrollLeft = scrollToMiddle() + 150
      break
    case 4:
      cardsContainer.value.scrollLeft = cardsContainer.value.scrollWidth
  }
})
</script>

<template>
  <div ref="cardsContainer" class="cards-container">
    <div ref="cardsContainer" class="cards-line">
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="index"
        :id="`skill-${index}`"
        v-bind:class="`${index === selectedIndex ? 'card-active' : ''}`"
        :item="item"
        @click="selectCard(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  --card-width: 300px;
  --card-height: 400px;
  --gap: 10px;
  position: relative;
  width: 100%;
  height: calc(var(--card-height) + 20px);
  margin-bottom: 50px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.cards-line {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: all 0.3s ease;
}
</style>
