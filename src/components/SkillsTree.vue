<script setup lang="ts">
import TreeLeave from '@/components/TreeLeave.vue'

// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="skills-container">
    <div v-for="(item, i) in props.skills" :key="i" :class="`tree-container ${item.type}`">
      <h3>{{ item.type }}</h3>
      <TreeLeave :skills="item.skills" />
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  --gap: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);

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
</style>
