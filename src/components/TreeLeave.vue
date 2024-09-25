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
        <sub>{{ skill.levelAcquired }}/{{ skill.levelTotal }}</sub>
        <span>{{ skill.title }}</span>
      </div>
      <TreeLeave v-if="skill.children.length > 0" :skills="skill.children" :parent="false" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-top: var(--gap);
}

.level {
  --gap: 50px;
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
  gap: 15px;
  line-height: 1rem;
}

.hexagon.master ~ div.text span {
  font-weight: bold !important;
}
.hexagon {
  margin: auto;
  --b: 1px; /* adjust to control the border  */
  height: 100px; /* adjust to control the size  */
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
.hexagon.master {
  --b: 3px;
}
.hexagon.mid {
  --b: 2px;
}
.frontend .hexagon {
  background: var(--vt-c-pink-light);
}
.backend .hexagon {
  background: var(--vt-c-cyan-light);
}
.soft .hexagon {
  background: var(--vt-c-lime-light);
}
.frontend .hexagon.mid,
.frontend .hexagon.master {
  background: var(--vt-c-pink);
}
.backend .hexagon.mid,
.backend .hexagon.master {
  background: var(--vt-c-cyan);
}
.soft .hexagon.mid,
.soft .hexagon.master {
  background: var(--vt-c-lime);
}

.before::before,
.after::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  height: calc(var(--gap) / 2);
  width: 1px;
  border-left: 1px solid white;
}
.after::after {
  top: 100px;
}
.before::before {
  top: -25px;
}
.sisters::before {
  width: calc(100% + 16px);
  border-top: 1px solid white;
}
</style>
