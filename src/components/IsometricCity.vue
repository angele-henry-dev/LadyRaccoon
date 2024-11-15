<script setup lang="ts">
import experience from '@/assets/models/experience.json' with { type: 'json' }
import { ref } from 'vue'

// Variables
let selectedIndex = ref(0)
</script>

<template>
  <div class="isometric-city">
    <div class="iso-description grow">
      <ul ref="iso-description-container">
        <input
          v-for="(item, i) in experience"
          :key="i"
          type="radio"
          :id="'iso_' + i.toString()"
          class="carousel__activator"
          name="activator"
          :checked="selectedIndex === i ? true : false"
          @change="selectedIndex = i"
        />
        <div v-for="(item, i) in experience" :key="i" class="carousel__controls">
          <label
            class="carousel__control carousel__control--backward"
            :for="
              i === 0 ? 'iso_' + (experience.length - 1).toString() : 'iso_' + (i - 1).toString()
            "
            >&#10148;</label
          >
          <label
            class="carousel__control carousel__control--forward"
            :for="
              i === experience.length - 1 ? 'iso_' + (0).toString() : 'iso_' + (i + 1).toString()
            "
            >&#10148;</label
          >
        </div>
        <li v-for="(item, i) in experience" :key="i">
          <div class="card">
            <h2>{{ item.what }}</h2>
            <p>
              {{ item.from }}<span v-if="item.to"> - {{ item.to }}</span
              >, {{ item.where }}
            </p>
            <div class="pins">
              <span v-for="(techno, j) in item.technologies" :key="j">{{ techno }}</span>
            </div>
            <div>
              <p v-for="(description, j) in item.descriptions" :key="j">{{ description }}</p>
            </div>
          </div>
        </li>
        <div class="carousel__indicators">
          <label
            v-for="(item, i) in experience"
            :key="i"
            class="carousel__indicator"
            :for="'iso_' + i.toString()"
          >
            &#9679;
          </label>
        </div>
      </ul>
    </div>
    <div class="iso-container">
      <div ref="ground" class="ground night">
        <div class="shadow-right"></div>
        <div class="shadow-left"></div>
        <div class="grass">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
        </div>
        <div class="parking">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
        <div class="water">
          <div class="one">
            <div class="water-drops">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="road">
          <div class="four"></div>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="five"></div>
        </div>
        <div class="car">
          <div class="one"></div>
          <div class="two"></div>
        </div>
        <div class="tree">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
          <div class="six"></div>
          <div class="seven"></div>
          <div class="eight"></div>
          <div class="nine"></div>
          <div class="ten"></div>
          <div class="eleven"></div>
        </div>
        <div ref="buildings">
          <div
            v-for="(item, i) in experience"
            :key="i"
            :class="`${item.building}`"
            :style="item.position"
          >
            <div class="wall-one">
              <div></div>
            </div>
            <div class="wall-two">
              <div></div>
            </div>
            <div
              :ref="`roof${i}`"
              :class="`roof${selectedIndex === i ? ' selected' : ''}`"
              @click="selectedIndex = i"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.isometric-city {
  --ground--night: hsl(0, 0%, 21%);
  --ground-dark--night: hsl(0, 0%, 5%);
  --road--night: hsl(0, 0%, 26%);
  --grass--night: hsl(0, 0%, 11%);
  --tree-trunc--night: hsl(0, 0%, 7%);
  --parking--night: hsl(0, 0%, 40%);
  --ground: hsl(0, 0%, 51%);
  --ground-dark: hsl(0, 0%, 30%);
  --road: hsl(0, 0%, 56%);
  --grass: hsl(0, 0%, 41%);
  --tree-trunc: hsl(25, 100%, 17%);
  --parking: hsl(0, 0%, 100%);

  --water: var(--vt-c-cyan);
  --water-drop: var(--vt-c-white);
  --tree: var(--vt-c-lime);
  --building-1: hsl(283, 34%, 32%);
  --building-1-dark: hsl(283, 34%, 12%);
  --building-1-window: var(--vt-c-pink);
  --roof: hsl(283, 34%, 32%);
  --roof-light: hsl(283, 34%, 52%);
  --car-1: var(--vt-c-yellow);
  --car-2: hsl(33, 100%, 50%);
}

.isometric-city {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 70px;
}

.night-mode i,
.roof {
  cursor: pointer;
}
.night-mode {
  width: 24px;
}

/* Sizes */

.iso-container {
  width: 560px;
}
.ground {
  width: 360px;
  height: 360px;
}
.iso-description {
  min-width: 300px;
  max-width: 560px;
  height: 630px;
}

/* Carousel */

.iso-description {
  display: inline-block;
  padding: 20px;
  margin-bottom: 20px;
}
.iso-description ul {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0;
  list-style: none;
  border-radius: 5px;
  overflow: hidden;
}
.iso-description ul li {
  height: calc(100% - 70px);
  position: absolute;
  overflow-y: auto;
  opacity: 0;
  overflow: hidden;
}
.iso-description ul li .card {
  height: 100%;
}
.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ li:nth-of-type(1),
.carousel__activator:nth-of-type(2):checked ~ li:nth-of-type(2),
.carousel__activator:nth-of-type(3):checked ~ li:nth-of-type(3),
.carousel__activator:nth-of-type(4):checked ~ li:nth-of-type(4),
.carousel__activator:nth-of-type(5):checked ~ li:nth-of-type(5),
.carousel__activator:nth-of-type(6):checked ~ li:nth-of-type(6),
.carousel__activator:nth-of-type(7):checked ~ li:nth-of-type(7) {
  transition:
    opacity 0.5s,
    transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
  z-index: 5;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__controls:nth-of-type(1),
.carousel__activator:nth-of-type(2):checked ~ .carousel__controls:nth-of-type(2),
.carousel__activator:nth-of-type(3):checked ~ .carousel__controls:nth-of-type(3),
.carousel__activator:nth-of-type(4):checked ~ .carousel__controls:nth-of-type(4),
.carousel__activator:nth-of-type(5):checked ~ .carousel__controls:nth-of-type(5),
.carousel__activator:nth-of-type(6):checked ~ .carousel__controls:nth-of-type(6),
.carousel__activator:nth-of-type(7):checked ~ .carousel__controls:nth-of-type(7) {
  display: block;
}
.carousel__activator:nth-of-type(1):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(1),
.carousel__activator:nth-of-type(2):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(2),
.carousel__activator:nth-of-type(3):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(3),
.carousel__activator:nth-of-type(4):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(4),
.carousel__activator:nth-of-type(5):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(5),
.carousel__activator:nth-of-type(6):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(6),
.carousel__activator:nth-of-type(7):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(7) {
  color: #fafafa;
}

.carousel__control {
  position: absolute;
  bottom: 0;
  display: block;
  font-size: 3rem;
  color: #787878;
  cursor: pointer;
  z-index: 3;
}
.carousel__control:hover {
  color: #fff;
}
.carousel__control--backward {
  left: 10px;
  transform: rotate(-180deg);
}
.carousel__control--forward {
  right: 10px;
}

.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel__indicator {
  font-size: 20px;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  margin: 0 2.5px 0 2.5px;
}
.carousel__indicator:hover {
  color: #fafafa;
}
.carousel__indicator {
  color: #787878;
}

/* Colors */

.ground {
  background-color: var(--ground);
}
.ground div.shadow-right {
  background-color: var(--ground-dark);
}
.ground div.shadow-left {
  background-color: var(--ground);
}
.grass div {
  background-color: var(--grass);
}
.road div {
  background-color: var(--road);
}
.parking div {
  background-color: var(--road);
  border: 1px solid var(--parking);
}
.parking div::after {
  color: var(--parking);
}
.water div {
  background-color: var(--water);
  box-shadow: 0 0 8px 3px hsl(186, 100%, 88%);
}
.water-drops div {
  background-color: var(--water-drop);
}
.water div.one {
  box-shadow: 0 0 8px 3px hsl(186, 100%, 88%);
}
.tree div {
  background: var(--tree);
  box-shadow: 0 0 12px 2px var(--tree);
}
.tree div:before {
  background: var(--tree-trunc);
}
.car div.one {
  background-color: var(--car-1);
  box-shadow: 0 0 18px 7px var(--car-1);
}
.car div.one::after {
  box-shadow: 0 0 18px 5px var(--car-1);
}
.car div.two {
  background-color: var(--car-2);
}
.car div.two::after {
  box-shadow: 0 0 18px 5px var(--car-2);
}
.brickhouse .wall-one,
.brickbuilding .wall-one {
  background-color: var(--building-1);
}
.brickhouse .wall-two,
.brickbuilding .wall-two {
  background-color: var(--building-1-dark);
}
.brickhouse .roof,
.brickbuilding .roof {
  background-color: var(--roof);
}
.brickhouse .wall-one div,
.brickhouse .wall-two div,
.brickbuilding .wall-one div,
.brickbuilding .wall-two div {
  background-color: var(--building-1-window);
}
.brickhouse .wall-one div {
  box-shadow:
    0 10px 0 0 var(--building-1-window),
    10px 0px 0 0 var(--building-1-window),
    10px 10px 0 0 var(--building-1-window),
    20px 0px 0 0 var(--building-1-window),
    20px 10px 0 0 var(--building-1-window),
    30px 0px 0 0 var(--building-1-window),
    30px 10px 0 0 var(--building-1-window);
}
.brickbuilding .wall-one div {
  box-shadow:
    0 10px 0 0 var(--building-1-window),
    0 20px 0 0 var(--building-1-window),
    0 30px 0 0 var(--building-1-window),
    10px 0px 0 0 var(--building-1-window),
    10px 10px 0 0 var(--building-1-window),
    10px 20px 0 0 var(--building-1-window),
    10px 30px 0 0 var(--building-1-window),
    20px 0px 0 0 var(--building-1-window),
    20px 10px 0 0 var(--building-1-window),
    20px 20px 0 0 var(--building-1-window),
    20px 30px 0 0 var(--building-1-window),
    30px 0px 0 0 var(--building-1-window),
    30px 10px 0 0 var(--building-1-window),
    30px 20px 0 0 var(--building-1-window),
    30px 30px 0 0 var(--building-1-window);
}
.brickhouse .wall-two div {
  box-shadow:
    0 10px 0 0 var(--building-1-window),
    0 20px 0 0 var(--building-1-window),
    0 30px 0 0 var(--building-1-window),
    10px 0 0 0 var(--building-1-window),
    10px 10px 0 0 var(--building-1-window),
    10px 20px 0 0 var(--building-1-window),
    10px 30px 0 0 var(--building-1-window);
}
.brickbuilding .wall-two div {
  box-shadow:
    10px 0 0 0 var(--building-1-window),
    20px 0 0 0 var(--building-1-window),
    30px 0 0 0 var(--building-1-window),
    0px 10px 0 0 var(--building-1-window),
    10px 10px 0 0 var(--building-1-window),
    20px 10px 0 0 var(--building-1-window),
    30px 10px 0 0 var(--building-1-window),
    0px 20px 0 0 var(--building-1-window),
    10px 20px 0 0 var(--building-1-window),
    20px 20px 0 0 var(--building-1-window),
    30px 20px 0 0 var(--building-1-window),
    0px 30px 0 0 var(--building-1-window),
    10px 30px 0 0 var(--building-1-window),
    20px 30px 0 0 var(--building-1-window),
    30px 30px 0 0 var(--building-1-window);
}
.roof.selected::after {
  box-shadow: inset 0 0 8px 3px var(--building-1-window);
}
.roof:hover,
.roof.selected {
  background: linear-gradient(#e66465, var(--roof-light));
  box-shadow: 0 0 18px 7px var(--building-1-window);
}
/* Night Mode */
.ground.night {
  background-color: var(--ground--night);
}
.ground.night div.shadow-right {
  background-color: var(--ground-dark--night);
}
.ground.night div.shadow-left {
  background-color: var(--ground--night);
}
.ground.night .grass div {
  background-color: var(--grass--night);
}
.ground.night .road div {
  background-color: var(--road--night);
}
.ground.night .parking div {
  background-color: var(--road--night);
  border: 1px solid var(--parking--night);
}
.ground.night .parking div::after {
  color: var(--parking--night);
}

/* Ground */

.ground {
  display: block;
  transform: rotateZ(45deg) translateX(140px);
  z-index: 0;
}
.ground div.shadow-right {
  position: absolute;
  display: block;
  width: 10px;
  height: 100%;
  top: 5px;
  right: -10px;
  z-index: 1;
  transform: skewY(45deg);
}
.ground div.shadow-left {
  position: absolute;
  display: block;
  width: 100%;
  height: 10px;
  bottom: -10px;
  right: -5px;
  z-index: 1;
  transform: skewX(45deg);
}

/* Grass */

.grass div {
  position: absolute;
  display: block;
  z-index: 2;
}
.grass div.one {
  width: 70px;
  height: 260px;
  bottom: 0px;
  left: 0px;
}
.grass div.two {
  width: 325px;
  height: 55px;
  top: 0px;
  left: 0px;
}
.grass div.three {
  width: 27px;
  height: 260px;
  bottom: 0px;
  left: 115px;
}
.grass div.four {
  width: 220px;
  height: 70px;
  bottom: 0px;
  right: 0px;
}
.grass div.five {
  width: 140px;
  height: 180px;
  bottom: 115px;
  right: 35px;
}

/* Parkings */

.parking div {
  position: absolute;
  display: block;
  transform: rotate(-90deg);
  width: 15px;
  height: 23px;
  font-size: 9pt;
  z-index: 2;
}
.parking div::after {
  content: 'P';
  margin-top: 20px;
  margin-left: 3px;
}
.parking div.one {
  bottom: 200px;
  right: 38px;
}
.parking div.two {
  bottom: 215px;
  right: 38px;
}
.parking div.three {
  bottom: 230px;
  right: 38px;
}

/* Water */

.water div {
  position: absolute;
  display: block;
  z-index: 3;
}
.water-drops div {
  position: absolute;
  display: block;
  width: 4px;
  height: 0px;
  border-radius: 4px;
  opacity: 0.4;
  animation: water-drops 2s ease infinite;
  transform: rotateZ(-45deg);
  z-index: 5;
}
@keyframes water-drops {
  0% {
    height: 0px;
    border-radius: 3px;
  }
  50% {
    height: 15px;
  }
  100% {
    height: 0px;
  }
}
div.one .water-drops div:nth-child(1) {
  bottom: -20px;
  left: 10px;
  animation-delay: 0.25s;
}
div.one .water-drops div:nth-child(2) {
  bottom: -20px;
  left: 15px;
  animation-delay: 0.5s;
}
div.one .water-drops div:nth-child(3) {
  bottom: -20px;
  left: 20px;
  animation-delay: 0.75s;
}
div.one .water-drops div:nth-child(4) {
  bottom: -20px;
  left: 25px;
  animation-delay: 1s;
}
.water div.one {
  width: 42px;
  height: 30px;
  bottom: 135px;
  right: 55px;
  border-radius: 2px;
}
.water div.one::after {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

/* Road */

.road div {
  position: absolute;
  display: block;
  width: 25px;
  z-index: 5;
}
.road div.one {
  height: 280px;
  bottom: 0;
  left: 80px;
}
.road div.two {
  height: 200px;
  top: 80px;
  left: 152px;
}
.road div.three {
  height: 280px;
  top: 0;
  right: 0;
}
.road div.four {
  transform: rotateZ(90deg);
  height: 177px;
  top: -10px;
  left: 76px;
}
.road div.five {
  transform: rotateZ(90deg);
  height: 180px;
  bottom: 2px;
  right: 91px;
}

/* Trees */

.tree div {
  position: absolute;
  border-radius: 10% 50% 50% 50%;
  height: 30px;
  width: 30px;
  animation: sway 2s ease-in-out infinite;
  animation-direction: alternate;
  transform-origin: bottom;
  animation-delay: 1s;
  z-index: 6;
}
.tree div:before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: calc(50% + 9px);
  height: 20%;
  width: 33%;
  transform: rotate(45deg);
}
@keyframes sway {
  0% {
    transform: skewX(12deg);
  }
  60% {
    transform: skewX(0deg);
  }
  100% {
    transform: skewX(12deg);
  }
}
.tree div.one {
  top: 10px;
  left: 10px;
}
.tree div.two {
  top: 10px;
  left: 45px;
}
.tree div.three {
  bottom: 14px;
  left: 95px;
}
.tree div.four {
  bottom: 110px;
  left: 10px;
}
.tree div.five {
  bottom: 150px;
  left: 10px;
}
.tree div.six {
  top: 10px;
  left: 185px;
}
.tree div.seven {
  bottom: 140px;
  left: 100px;
}
.tree div.eight {
  bottom: 230px;
  left: 100px;
}
.tree div.nine {
  bottom: 14px;
  right: 150px;
}
.tree div.ten {
  bottom: 14px;
  right: 10px;
}
.tree div.eleven {
  top: 100px;
  right: 75px;
}

/* Cars */

.car div {
  position: absolute;
  display: block;
  width: 15px;
  height: 7px;
  z-index: 5;
}
.car div.one {
  top: 79px;
  left: 0px;
  animation: car-one 9s linear infinite;
  animation-delay: 0.25s;
}
.car div.one::after {
  display: block;
  content: '';
}
@keyframes car-one {
  0% {
    top: 79px;
    left: 0px;
    transform: rotate(0deg);
    box-shadow: 2px 2px 0 0 #333;
  }
  24% {
    transform: rotate(0deg);
    box-shadow: 2px 2px 0 0 #333;
  }
  25% {
    top: 79px;
    left: 76px;
    transform: rotate(90deg);
    box-shadow: 2px -2px 0 0 #333;
  }
  100% {
    top: calc(100% - 10px);
    left: 76px;
    transform: rotate(90deg);
    box-shadow: 2px -2px 0 0 #333;
  }
}
.car div.two {
  top: 0px;
  right: 0px;
  animation: car-two 14s linear infinite;
  animation-delay: 5s;
  visibility: hidden;
}
.car div.two::after {
  display: block;
  content: '';
}
@keyframes car-two {
  0% {
    visibility: visible;
    top: 0px;
    right: 14px;
    transform: rotate(90deg);
    box-shadow: 2px -2px 0 0 #333;
  }
  19% {
    transform: rotate(90deg);
    box-shadow: 2px -2px 0 0 #333;
  }
  20% {
    top: 112px;
    right: 14px;
    transform: rotate(180deg);
    box-shadow: -2px -2px 0 0 #333;
  }
  30% {
    top: 112px;
    right: 39px;
    transform: rotate(180deg);
    box-shadow: -2px -2px 0 0 #333;
  }
  50% {
    top: 112px;
    right: 39px;
    transform: rotate(180deg);
    box-shadow: -2px -2px 0 0 #333;
  }
  60% {
    top: 112px;
    right: 0px;
    transform: rotate(180deg);
    box-shadow: -2px -2px 0 0 #333;
  }
  61% {
    top: 112px;
    right: 0px;
    transform: rotate(270deg);
    box-shadow: -2px 2px 0 0 #333;
  }
  66% {
    top: 125px;
    right: 0px;
    transform: rotate(270deg);
    box-shadow: -2px 2px 0 0 #333;
  }
  80% {
    top: 0px;
    right: 0px;
    transform: rotate(270deg);
    box-shadow: -2px 2px 0 0 #333;
  }
  81% {
    transform: rotate(270deg);
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

/* Buildings */

.brickhouse,
.brickbuilding {
  position: absolute;
  display: block;
  background-color: transparent;
  height: 50px;
  z-index: 6;
}
.brickhouse {
  width: 25px;
}
.brickbuilding {
  width: 50px;
}
.brickhouse .wall-one,
.brickbuilding .wall-one {
  position: absolute;
  display: block;
  transform: skewX(45deg);
  top: 0px;
  width: 50px;
}
.brickhouse .wall-one {
  height: 25px;
  left: -37px;
}
.brickbuilding .wall-one {
  height: 50px;
  left: -25px;
}
.brickhouse .wall-two,
.brickbuilding .wall-two {
  position: absolute;
  display: block;
  transform: skewY(45deg);
  left: 0px;
  height: 50px;
}
.brickhouse .wall-two {
  top: -37px;
  width: 25px;
}
.brickbuilding .wall-two {
  top: -25px;
  width: 50px;
}
.brickhouse .roof,
.brickbuilding .roof {
  position: absolute;
  display: block;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  top: -50px;
  left: -50px;
}
.brickhouse .wall-one div,
.brickhouse .wall-two div,
.brickbuilding .wall-one div,
.brickbuilding .wall-two div {
  position: absolute;
  display: block;
}
.brickhouse .wall-one div,
.brickbuilding .wall-one div {
  width: 5px;
  height: 7px;
  top: 3px;
  left: 8px;
}
.brickhouse .wall-two div,
.brickbuilding .wall-two div {
  width: 7px;
  height: 5px;
  top: 8px;
  left: 3px;
}

.roof {
  box-shadow: inset 0 0 0 3px #313131;
  width: 100%;
  height: 100%;
}
.roof::after {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 2px;
}
</style>
