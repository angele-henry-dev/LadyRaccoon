<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <ul class="level">
    <li v-for="(skill, j) in props.skills" :key="j" class="element">
      <div
        :class="`hexagon ${skill.levelTotal - skill.levelAcquired === 0 ? 'master' : skill.levelTotal - skill.levelAcquired === 1 ? 'mid' : ''}`"
      ></div>
      <div class="text">
        <sub>{{ skill.levelAcquired }}/{{ skill.levelTotal }}</sub>
        <span>{{ skill.title }}</span>
      </div>
      <TreeLeave v-if="skill.children" :skills="skill.children" />
    </li>
  </ul>
</template>

<style scoped>
/* .tree {
  display: flex;
  flex-direction: column;
  gap: 50px;
} */

.level {
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem; */

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
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
.hexagon::before {
  content: '';
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
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

.needs::before,
.needed::after {
  display: block;
  position: absolute;
  left: 50%;
  content: '';
  width: 1px;
  height: calc(var(--gap) / 2);
  border-right: 1px solid white;
}
.needs::before {
  top: calc(0px - (var(--gap) / 2));
}
</style>
