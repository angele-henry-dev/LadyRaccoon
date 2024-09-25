<script setup lang="ts">
import TreeLeave from '@/components/TreeLeave.vue'

// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="skills-container">
    <div v-for="(item, i) in props.skills" :key="i" :class="`tree-container ${item.type}`">
      <h3>{{ item.type }}</h3>
      <TreeLeave :skills="item.skills" :parent="true" />
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
}
.tree-container {
  min-width: fit-content;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
}
</style>
