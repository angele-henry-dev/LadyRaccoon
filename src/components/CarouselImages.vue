<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'

import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

defineProps(['items'])

const carouselImages = ref(null)
const carouselImagesSize = useElementSize(carouselImages)
const iconSet = {
  game: faGamepad,
  talk: faMicrophone,
  application: faMobileScreen
}

function getImageUrl(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
function handleClick(direction: string) {
  if (!carouselImages.value) {
    return
  }
  if (direction === 'previous') {
    carouselImages.value.scrollBy({
      left: -carouselImagesSize.width.value,
      behavior: 'smooth'
    })
  } else {
    carouselImages.value.scrollBy({
      left: carouselImagesSize.width.value,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="carousel-wrapper">
    <ul ref="carouselImages" class="list">
      <li v-for="(item, index) in items" :key="index" class="item">
        <div class="img-shadow"></div>
        <img :title="item.title" :alt="item.title" :src="getImageUrl(`${item.src}`)" width="100%" />
        <div class="description">
          <h2>
            <FontAwesomeIcon :icon="iconSet[item.type as keyof typeof iconSet]" />
            {{ item.title }}
          </h2>
          <p>
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>
    <a>
      <FontAwesomeIcon
        :icon="faChevronLeft"
        size="2xl"
        @click="handleClick('previous')"
        class="button button--previous"
      />
    </a>
    <a>
      <FontAwesomeIcon
        :icon="faChevronRight"
        size="2xl"
        @click="handleClick('next')"
        class="button button--next"
      />
    </a>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  position: relative;
}
.carousel-wrapper .list {
  display: flex;
  list-style: none;
  padding: 0;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.carousel-wrapper .list::-webkit-scrollbar {
  display: none;
}

.carousel-wrapper .item {
  position: relative;
  width: 50%;
  flex-shrink: 0;
  height: fit-content;
  scroll-snap-align: center;
  text-align: center;
  border-radius: 25px;
  overflow: hidden;
}
.carousel-wrapper .item .description {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 10px 40px;
}

.carousel-wrapper .item .img-shadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 1) 100%
  );
}

.carousel-wrapper .button {
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
.carousel-wrapper .button--previous {
  left: 10px;
}
.carousel-wrapper .button--next {
  right: 10px;
}
</style>
