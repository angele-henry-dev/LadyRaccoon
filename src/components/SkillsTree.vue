<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="skills-container">
    <div v-for="(item, i) in props.skills" :key="i" :class="`tree-container ${item.type}`">
      <h3>{{ item.type }}</h3>
      <ul class="tree">
        <li v-for="(value, key) in item.skills" :key="key">
          <ul :class="`level ${key}`">
            <li
              v-for="(arr, j) in value"
              :key="j"
              :class="`element${arr.needed ? ' needed' : ''}${arr.needs ? ' needs' : ''}`"
            >
              <div
                :class="`hexagon ${arr.levelTotal - arr.levelAcquired === 0 ? 'master' : arr.levelTotal - arr.levelAcquired === 1 ? 'mid' : ''}`"
              ></div>
              <div class="text">
                <sub>{{ arr.levelAcquired }}/{{ arr.levelTotal }}</sub>
                <span>{{ arr.title }}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}

.tree-container {
  min-width: fit-content;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
}

.tree {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.level {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.element {
  position: relative;
}

.text {
  position: absolute;
  top: 10px;
  width: 100%;
  height: 100%;
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
/* .frontend .hexagon.master::before {
  box-shadow: inset 0 0 3px 3px var(--vt-c-pink-light);
}
.backend .hexagon.master::before {
  box-shadow: inset 0 0 3px 3px var(--vt-c-cyan-light);
}
.soft .hexagon.master::before {
  box-shadow: inset 0 0 3px 3px var(--vt-c-lime-light);
} */
</style>
