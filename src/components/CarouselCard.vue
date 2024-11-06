<script setup lang="ts">
// Props
const props = defineProps(['item'])
</script>

<template>
  <div class="card-item">
    <div class="card-frame"></div>
    <div class="card-inner">
      <h2>{{ props.item.type }}</h2>
      <ul>
        <li v-for="(skill, index) in props.item.skills" :key="index" class="parent">
          {{ skill.title }}
          <ul class="children">
            <li v-for="(child, j) in skill.children" :key="j">{{ child.title }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  flex: 0 0 auto;
  cursor: pointer;
}
.card-frame {
  -webkit-transform: scale(0.95, 0.8);
  transform: scale(0.95, 0.8);
  transition:
    background 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.9),
    -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.2, 1);
  background-color: #fff;
}
.card-frame,
.card-frame:after,
.card-frame:before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--vt-c-black-soft);
  border: 1px solid var(--color-border);
  border-radius: 15px;
}

.card-inner {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 10;
}

.card-inner h2 {
  border-bottom: 1px solid var(--vt-c-pink);
  text-transform: uppercase;
  font-size: 1em;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.card-inner ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.card-inner ul li.parent {
  padding: 5px;
}
.card-inner ul.children {
  height: 0;
  opacity: 0;
  transition: opacity 0.25s;
}

/* Active card */
.card-active .card-frame {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-color: var(--vt-c-white-soft);
}
.card-active .card-inner {
  color: var(--color-text-oposite);
  padding-top: 20px;
}
.card-active .card-inner ul.children {
  height: fit-content;
  opacity: 1;
  transition: opacity 0.5s 0.25s;
}
.card-active .card-inner ul li.parent {
  margin-bottom: 10px;
  border-bottom: 1px dashed var(--vt-c-pink);
  font-weight: bold;
}
</style>
