<script setup lang="ts">
import type { UseMouseEventExtractor } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'
import {
  useElementSize,
  useWindowScroll,
  useElementVisibility,
  useParentElement,
  useMouse,
  useElementBounding
} from '@vueuse/core'

// Props
const props = defineProps({
  play: {
    type: Boolean,
    default: false
  }
})

const parentEl = useParentElement()
const extractor: UseMouseEventExtractor = (event: MouseEvent | Touch) =>
  event instanceof Touch ? null : [event.offsetX, event.offsetY]
const mouse = useMouse({ target: parentEl, type: extractor, touch: true })

const retroLines = ref(null)
const window = useElementSize(retroLines)
const isVisible = useElementVisibility(retroLines)

const rockEl = ref(null)
const motoEl = ref(null)
const motoWidth = ref(20)
const motoHeight = ref(50)

const displayY = computed(() => {
  const scroll = useWindowScroll()
  return isVisible.value == true ? scroll.y.value % 100 : 0
})
const motoX = computed(() => {
  return isVisible.value == true ? mouse.x.value : 0
})
const motoZ = computed(() => {
  return isVisible.value == true ? mouse.x.value : 0
})
const rockX = computed(() => {
  return getRandomArbitrary(30, window.width.value - 30)
})

function gameOver() {
  const rockY = useElementBounding(rockEl).y || 0
  const motoY = useElementBounding(motoEl).y || 0

  if (
    rockY.value + motoHeight.value - 10 >= motoY.value &&
    motoX.value - motoWidth.value < rockX.value &&
    rockX.value < motoX.value + motoWidth.value
  ) {
    console.log('Game over!')
  }
}
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  if (props.play) {
    setInterval(gameOver, 50)
  }
})
</script>

<template>
  <div ref="parentEl" class="retro" v-bind="$attrs">
    <div class="retro-sky">
      <div class="retro-sunWrap">
        <div class="retro-sun-shadow"></div>
        <div class="retro-sun"></div>
      </div>
      <div class="retro-mountains">
        <div class="retro-mountains-left retro-mountain"></div>
        <div class="retro-mountains-right retro-mountain"></div>
      </div>
    </div>
    <div class="retro-ground">
      <div class="retro-linesWrap">
        <div class="retro-lines">
          <div class="retro-vlines">
            <div v-for="x in 53" :key="x" class="retro-vline"></div>
          </div>
          <div class="retro-hlines">
            <div v-for="x in 8" :key="x" class="retro-hline"></div>
          </div>
        </div>
      </div>
      <div ref="retroLines" class="retro-groundShadow"></div>
      <div v-if="play" class="retro-rock-wrapper">
        <div ref="rockEl" class="retro-rock"></div>
      </div>
      <div v-if="play" class="moto-wrapper">
        <div ref="motoEl" class="moto">
          <div class="wheel front"></div>
          <div class="wheel-shadow front"></div>
          <div class="wheel back"></div>
          <div class="wheel-shadow back"></div>
          <div class="frame"></div>
          <div class="seat"></div>
          <div class="handlebar left">
            <div class="headlight"></div>
          </div>
          <div class="handlebar right">
            <div class="headlight"></div>
          </div>
          <div class="moto-tail"></div>
        </div>
      </div>
    </div>
  </div>

  <svg height="0" width="0">
    <defs>
      <clipPath id="stripes" clipPathUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="0.175" />
        <rect x="0" y="0.178" width="1" height="0.075" />
        <rect x="0" y="0.259" width="1" height="0.075" />
        <rect x="0" y="0.343" width="1" height="0.075" />
        <rect x="0" y="0.430" width="1" height="0.075" />
        <rect x="0" y="0.520" width="1" height="0.075" />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.retro {
  position: relative;
  height: calc(80vh - 70px);
  color: var(--vt-c-pink);
}

.retro-sky {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00000000 8%, var(--vt-c-pink));
}

.retro-sunWrap {
  position: relative;
  width: calc(80vh - 70px);
  height: 100%;
}
.retro-sun,
.retro-sun-shadow {
  --glow-color: var(--vt-c-orange);
  border-radius: 50%;
}
.retro-sun {
  position: relative;
  background-image: linear-gradient(var(--vt-c-yellow), var(--vt-c-orange), var(--vt-c-pink) 65%);
  clip-path: url(#stripes);
  height: 100%;
  width: 100%;
}
.retro-sun-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 80px 40px var(--glow-color);
  background-color: var(--glow-color);
  opacity: 0.5;
  clip-path: inset(-50% -50% 50% -50%);
  animation: 2s ease infinite alternate retro-sun-glow-anim;
}
@keyframes retro-sun-glow-anim {
  from {
    box-shadow: 0 0 80px 40px var(--glow-color);
  }
  to {
    box-shadow: 0 0 160px 40px var(--glow-color);
  }
}

.retro-mountains {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
}
.retro-mountain {
  position: absolute;
  width: 40%;
  height: 100%;
  background-color: var(--color-background);
  background-image: linear-gradient(var(--color-background) 80%, var(--color-background-soft));
}
.retro-mountains-left {
  left: 0;
  clip-path: polygon(
    0% 100%,
    0% 55%,
    5% 60%,
    10% 55%,
    20% 50%,
    25% 42%,
    30% 38%,
    33% 35%,
    40% 45%,
    50% 50%,
    60% 70%,
    70% 85%,
    75% 82%,
    80% 91%,
    85% 90%,
    90% 95%,
    95% 98%,
    100% 100%
  );
}
.retro-mountains-right {
  right: 0;
  clip-path: polygon(
    0% 100%,
    5% 95%,
    10% 85%,
    15% 87%,
    20% 80%,
    25% 78%,
    30% 65%,
    40% 70%,
    50% 57%,
    60% 53%,
    67% 68%,
    70% 70%,
    75% 66%,
    80% 55%,
    90% 50%,
    95% 60%,
    100% 57%,
    100% 100%
  );
}

.retro-ground {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 50%;
  bottom: 0;
  border-top: 2px solid var(--vt-c-pink);
  border-bottom: 2px solid var(--vt-c-pink);
  background-color: var(--color-background);
}
.retro-groundShadow {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--color-background) 0%, transparent);
}

.retro-linesWrap {
  height: 100%;
  perspective: 1000px;
  perspective-origin: center top;
}
.retro-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top center;
}
:not(.auto) .retro-lines {
  transform: rotateX(84deg) translateY(v-bind('displayY + "px"'));
}
.auto .retro-lines {
  animation: 0.35s linear infinite retro-lines-anim;
}
@keyframes retro-lines-anim {
  from {
    transform: rotateX(84deg) translateY(0);
  }
  to {
    transform: rotateX(84deg) translateY(100px);
  }
}
.retro-hlines,
.retro-vlines {
  position: absolute;
  left: calc((900% - 100%) / -2);
  width: 900%;
  height: 500%;
}
.retro-vlines {
  display: flex;
  justify-content: center;
}
.retro-hline,
.retro-vline {
  width: 100%;
  height: 100%;
  background-color: currentColor;
}
.retro-hline {
  height: 3px;
}
.retro-vline {
  width: 3px;
}
.retro-hline + .retro-hline {
  margin-top: 98px;
}
.retro-vline + .retro-vline {
  margin-left: 48px;
}

.retro-rock-wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.retro-rock {
  position: absolute;
  left: v-bind('rockX + "px"');
  width: 20px;
  height: 40px;
  background-color: chocolate;
  perspective: 1000px;
  perspective-origin: center top;
  transform-origin: top center;
  animation: calc(0.35s * 8) linear infinite retro-rock-anim;
}
@keyframes retro-rock-anim {
  0% {
    bottom: 100%;
  }
  100% {
    bottom: calc(0px - 40px + 10px);
  }
}

/* Motorcycle */
.moto-wrapper {
  position: absolute;
  bottom: 40px;
  left: v-bind('motoX + "px"');
  perspective: 150px;
}
.moto {
  width: 12px;
  height: 70px;
  border-radius: 15px;
  transform: rotateX(30deg) rotateY(0deg) rotateZ(v-bind('motoZ + "deg"'));
  transform-style: preserve-3d;
}
.wheel,
.wheel-shadow {
  position: absolute;
  width: 12px;
  height: 20px;
  background-color: var(--vt-c-yellow);
  box-shadow: 0 0 20px 1px var(--vt-c-yellow);
  border-radius: 15px;
}
.wheel-shadow {
  width: 6px;
  height: 20px;
  background-color: #333;
  box-shadow: none;
  animation: 0.08s linear infinite alternate wheel-shadow-anim;
}
@keyframes wheel-shadow-anim {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.2;
  }
}
.wheel.front {
  top: 0;
  left: 0;
}
.wheel-shadow.front {
  top: 0;
  left: 3px;
}
.wheel.back {
  top: 50px;
  left: 0;
}
.wheel-shadow.back {
  top: 50px;
  left: 3px;
}
.frame {
  position: absolute;
  top: 10px;
  left: 1px;
  width: 10px;
  height: 40px;
  background-color: #333;
  box-shadow: 0 0 20px 1px var(--vt-c-yellow);
  border-radius: 3px;
}
.seat {
  position: absolute;
  top: 30px;
  left: 0px;
  width: 12px;
  height: 10px;
  background-color: #444;
  border-radius: 2px;
}
.handlebar {
  position: absolute;
  width: 15px;
  height: 5px;
  background-color: #333;
  box-shadow: 0 0 20px 1px var(--vt-c-yellow);
  border-radius: 2px;
}
.headlight {
  width: 6px;
  height: 6px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 12px;
}
.handlebar.left {
  left: -17px;
  top: 15px;
  transform: rotate(-20deg);
}
.handlebar.right {
  left: 13px;
  top: 16px;
  transform: rotate(200deg);
}
</style>
