<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="carousel-container">
    <div v-for="(item, index) in props.skills" :key="index">
      <h2>{{ item.type }}</h2>
      <div class="cards-line">
        <div v-for="(child, j) in item.skills" :key="j">{{ child.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  background-color: var(--vt-c-black-mute);
}
.cards-line {
  display: flex;
  flex-direction: row;
}
</style>
