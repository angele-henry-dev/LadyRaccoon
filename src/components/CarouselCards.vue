<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="carousel-container">
    <div v-for="(item, index) in props.skills" :key="index" class="cards-line">
      <div v-for="(child, j) in item.skills" :key="j" class="card-item">
        <div class="title">
          {{ child.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  --card-height: 150px;
  --gap: 48px;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: 20px;
  height: calc((var(--card-height) * 3) + (var(--gap) * 2) + 90px);
}
.cards-line {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.card-item {
  padding: 10px;
  background-color: var(--vt-c-black-mute);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  min-width: 200px;
  max-width: 200px;
  height: var(--card-height);
  flex: 0 0 auto;
}
</style>
