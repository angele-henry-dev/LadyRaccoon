<script setup lang="ts">
// Props
const props = defineProps(['skills', 'parent'])
</script>

<template>
  <ul v-if="props.skills.length > 0" class="level">
    <li
      v-for="(skill, j) in props.skills"
      :key="j"
      :class="`element
        ${props.parent === false && props.skills.length > 1 && j < props.skills.length - 1 ? ' sisters' : ''}
        ${props.parent === false ? ' before' : ''}
        ${skill.children.length > 0 ? ' after' : ''}`"
    >
      <div
        :class="`hexagon
        ${skill.levelTotal - skill.levelAcquired === 0 ? ' master' : skill.levelTotal - skill.levelAcquired === 1 ? ' mid' : ''}`"
      ></div>
      <div class="text">
        <span class="level-acquired"></span>
        <span>{{ skill.title }}</span>
      </div>
      <TreeLeave v-if="skill.children.length > 0" :skills="skill.children" :parent="false" />
    </li>
  </ul>
</template>

<style scoped>
.level {
  --gap: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: var(--gap);
}

.level {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: start;
  justify-content: center;
}

.element {
  position: relative;
}

.text {
  position: absolute;
  width: 100%;
  top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 21px;
  line-height: 1rem;
}

.hexagon {
  --b: 3px;
  margin: auto;
  height: 100px; /* Size */
  background: var(--vt-c-white);
  aspect-ratio: 1 / cos(30deg);
  clip-path: polygon(
    0 50%,
    50% -50%,
    100% 50%,
    50% 150%,
    0 50%,
    var(--b) 50%,
    calc(25% + var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(75% - var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(100% - var(--b)) 50%,
    calc(75% - var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    calc(25% + var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    var(--b) 50%
  );
}

.frontend .hexagon.master {
  background: var(--vt-c-pink);
}
.backend .hexagon.master {
  background: var(--vt-c-cyan);
}
.soft .hexagon.master {
  background: var(--vt-c-lime);
}

.before::before,
.after::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  width: 1px;
  border: 0 solid white;
  border-left-width: 3px;
}

.before::before {
  top: -25px;
  height: calc(var(--gap) / 2);
}

.after::after {
  top: 100px;
  height: calc(var(--gap) / 2);
}

.sisters::before {
  width: calc(100% + 16px);
  border-top-width: 3px;
}

.frontend .element::before,
.frontend .element::after {
  border-color: var(--vt-c-pink);
}
.backend .element::before,
.backend .element::after {
  border-color: var(--vt-c-cyan);
}
.soft .element::before,
.soft .element::after {
  border-color: var(--vt-c-lime);
}

.level-acquired {
  width: 50px;
  height: 10px;
  -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) 0/35%;
  mask: linear-gradient(90deg, #000 70%, #0000 0) 0/35%;
  background: linear-gradient(var(--vt-c-yellow) 0 0) 0/0% no-repeat var(--color-border);
  background-size: 33%;
}
.mid ~ .text .level-acquired {
  background-size: 66%;
}
.master ~ .text .level-acquired {
  background-size: 99%;
}
</style>
