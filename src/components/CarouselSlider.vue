<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'

defineProps(['items'])

const generalHeight = '300px'
const generalWidth = generalHeight
const iconSet = {
  game: faGamepad,
  talk: faMicrophone,
  application: faMobileScreen
}

function getImageUrl(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
</script>

<template>
  <div class="slider">
    <div class="slide-track">
      <div v-for="(item, index) in [...items, ...items]" :key="index" class="slide">
        <div class="img-shadow"></div>
        <img
          :title="item.title"
          :alt="item.title"
          :src="getImageUrl(`${item.src}`)"
          :height="generalHeight"
          :width="generalWidth"
        />
        <div class="content">
          <p class="title">
            <FontAwesomeIcon :icon="iconSet[item.type as keyof typeof iconSet]" />
            {{ item.title }}
          </p>
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc((var(--generalWidth) * -1) * v-bind('$props.items.length')));
  }
}

/** SLIDER */

.slider {
  --generalHeight: v-bind('generalHeight');
  --generalWidth: v-bind('generalWidth');
  background: var(--color-background);
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  content: '';
  height: var(--generalHeight);
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(var(--generalWidth) * (v-bind('$props.items.length') * 2));
  height: 100%;
}

/** SLIDE */

.slider .slide {
  position: relative;
  height: 100%;
  width: var(--generalWidth);
}
.slider .slide .content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.slider .slide .content .title {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 20px 0;
}
.slider .slide .content .description {
  display: none;
}

.slider .slide .img-shadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 1) 100%
  );
}

/** ON HOVER */

.slider .slide-track:hover {
  animation-play-state: paused;
}
.slider .slide:hover .content {
  justify-content: space-between;
}
.slider .slide:hover .content .description {
  display: block;
}
</style>
