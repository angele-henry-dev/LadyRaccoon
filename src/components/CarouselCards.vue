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
const cardsContainer = ref<HTMLElement | null>(null)
let selectedIndex = ref(1)

// Variables for drag behavior
let isDown = false
let startX = 0
let scrollLeft = 0

// Event listeners for mouse and touch events
onMounted(() => {
  const line = cardsContainer.value

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
    const focusedCard = getFocusedCard(line.scrollWidth)
    if (focusedCard && focusedCard.id) {
      selectedIndex.value = +focusedCard.id
    }
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

// Functions
function getFocusedCard(size: number): null | Element {
  const boxes = document.querySelectorAll('.card-item')
  const focus = (size / boxes.length) * 2 + 15

  let closestBox = null
  let closestDistance = Infinity

  boxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect()
    const boxCenter = boxRect.left + boxRect.width / 2

    const distanceToCenter = Math.abs(boxCenter - focus)

    if (distanceToCenter < closestDistance) {
      closestDistance = distanceToCenter
      closestBox = box
    }
  })

  return closestBox
}
</script>

<template>
  <div ref="cardsContainer" class="cards-container">
    <div class="cards-line">
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="index"
        :id="index"
        v-bind:class="`cloned${index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
      />
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="props.skills.length + index"
        :id="props.skills.length + index"
        v-bind:class="`${props.skills.length + index === selectedIndex ? ' card-active' : ''}`"
        :item="item"
      />
      <CarouselCard
        v-for="(item, index) in props.skills"
        :key="props.skills.length * 2 + index"
        :id="props.skills.length * 2 + index"
        v-bind:class="`cloned${props.skills.length * 2 + index === selectedIndex ? ' card-active' : ''}`"
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
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
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
