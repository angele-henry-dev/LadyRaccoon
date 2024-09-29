<script setup lang="ts">
import CarouselCard from '@/components/CarouselCard.vue'
import { type Skills } from '@/types/Skills'
import { ref, onMounted, onUnmounted } from 'vue'

// Props
interface Props {
  skills: Skills[]
}
const props = defineProps<Props>()

// Refs
const cardsLine = ref<HTMLElement | null>(null)
let selectedIndex = ref(0)

// Variables for drag behavior
let isDown = false
let startX = 0
let scrollLeft = 0

// Event listeners for mouse and touch events
onMounted(() => {
  const line = cardsLine.value

  if (!line) return

  const handleMouseDown = (e: MouseEvent) => {
    isDown = true
    line.classList.add('active')
    startX = e.pageX - line.offsetLeft
    scrollLeft = line.scrollLeft
  }

  const handleMouseLeaveOrUp = () => {
    isDown = false
    line.classList.remove('active')
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - line.offsetLeft
    const walk = (x - startX) * 2
    line.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e: TouchEvent) => {
    isDown = true
    startX = e.touches[0].pageX - line.offsetLeft
    scrollLeft = line.scrollLeft
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDown) return
    const x = e.touches[0].pageX - line.offsetLeft
    const walk = (x - startX) * 2
    line.scrollLeft = scrollLeft - walk
  }

  // Add event listeners for mouse
  line.addEventListener('mousedown', handleMouseDown)
  line.addEventListener('mouseleave', handleMouseLeaveOrUp)
  line.addEventListener('mouseup', handleMouseLeaveOrUp)
  line.addEventListener('mousemove', handleMouseMove)

  // Add event listeners for touch
  line.addEventListener('touchstart', handleTouchStart)
  line.addEventListener('touchend', handleMouseLeaveOrUp)
  line.addEventListener('touchmove', handleTouchMove)

  // Cleanup event listeners on unmount
  onUnmounted(() => {
    line.removeEventListener('mousedown', handleMouseDown)
    line.removeEventListener('mouseleave', handleMouseLeaveOrUp)
    line.removeEventListener('mouseup', handleMouseLeaveOrUp)
    line.removeEventListener('mousemove', handleMouseMove)
    line.removeEventListener('touchstart', handleTouchStart)
    line.removeEventListener('touchend', handleMouseLeaveOrUp)
    line.removeEventListener('touchmove', handleTouchMove)
  })
})
</script>

<template>
  <div ref="cardsLine" class="cards-container">
    <div class="cards-line">
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="index"
        v-bind:class="`${index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
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
  height: calc(var(--card-height) + 20px);
  margin-bottom: 50px;
  cursor: grab;
  overflow-x: auto;
  /* -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  } */
}
.cards-container.active {
  cursor: grabbing;
}
.cards-line {
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
