<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

import { ref, watch, computed } from 'vue'

// Props
const props = defineProps(['items'])

// Variables
const iconSet = {
  game: faGamepad,
  talk: faMicrophone
}
const chunkSize = ref(4)
let currImgIdx = ref(0)
let currSlide = ref(0)
let transition_name = ref('slide_next')
let currLightboxImg = ref(0)

// Methods
function prev() {
  if (arrChunk.value.length <= 1) {
    currImgIdx.value === 0 ? (currImgIdx.value = arrChunk.value.length + 1) : currImgIdx.value--
  } else {
    transition_name.value = 'slide_prev'
    currSlide.value = currSlide.value == 0 ? arrChunk.value.length - 1 : currSlide.value - 1
  }
}
function next() {
  if (arrChunk.value.length <= 1) {
    currImgIdx.value === arrChunk.value.length + 1 ? (currImgIdx.value = 0) : currImgIdx.value++
  } else {
    transition_name.value = 'slide_next'
    currSlide.value = currSlide.value == arrChunk.value.length - 1 ? 0 : currSlide.value + 1
  }
}
function getImageUrl(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}

// Watch
watch(currImgIdx, (newVal) => {
  currLightboxImg.value = newVal
})

// Computed
const arrChunk = computed(() => {
  return Array.from({ length: Math.ceil(props.items?.length / chunkSize.value) }, (v, i) =>
    props.items?.slice(i * chunkSize.value, i * chunkSize.value + chunkSize.value)
  )
})
</script>

<template>
  <div class="carousel">
    <div class="text-container">
      <h2>
        <FontAwesomeIcon
          :icon="iconSet[props.items[currImgIdx].type as keyof typeof iconSet]"
          size="xl"
        />
        {{ props.items[currImgIdx].title }}
      </h2>
      <p>{{ props.items[currImgIdx].when }}</p>
      <div class="pins">
        <span v-for="(techno, j) in props.items[currImgIdx].technologies" :key="j">{{
          techno
        }}</span>
      </div>
      <p>{{ props.items[currImgIdx].description }}</p>
    </div>
    <div class="carousel-container">
      <div class="carousel-item">
        <img
          :title="props.items[currImgIdx].title"
          :alt="props.items[currImgIdx].title"
          class="currImg"
          :src="getImageUrl(`${props.items[currImgIdx].src}`)"
          width="100%"
        />
      </div>
      <div class="crop" :name="transition_name" tag="div">
        <a @click="prev">
          <FontAwesomeIcon :icon="faChevronLeft" size="2xl" />
        </a>
        <div class="carousel-chunk" v-for="(chunk, i) in arrChunk" v-show="currSlide == i" :key="i">
          <div
            class="chunk-item"
            v-for="(item, j) in chunk"
            :key="j"
            @click="currImgIdx = j + i * chunkSize"
            :class="{ curr: item.src == props.items[currImgIdx].src }"
          >
            <img :title="item.title" :alt="item.title" :src="getImageUrl(`${item.src}`)" />
          </div>
        </div>
        <a @click="next">
          <FontAwesomeIcon :icon="faChevronRight" size="2xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}

.carousel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.text-container,
.carousel-container {
  width: 50%;
  min-width: 305px;
  max-width: 480px;
}
.carousel-container {
  order: 1;
}
.text-container {
  border: 1px solid var(--vt-c-divider-dark-2);
  padding: 20px;
  order: 2;
}

.carousel-item {
  position: relative;
  width: 100%;
  max-height: 480px;
}

.carousel-chunk {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.crop {
  height: 96px;
  overflow: hidden;
  width: 100%;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chunk-item {
  height: 80px;
  margin: 2px;
  padding: 2px;
  border: 1px solid transparent;
  cursor: pointer;
}
.chunk-item:hover {
  border: 1px solid #fff;
}
.chunk-item.curr {
  outline: 2px solid var(--vt-c-pink);
}
.chunk-item img {
  display: inline-block;
  height: 100%;
}
</style>
