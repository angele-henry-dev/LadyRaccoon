<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="skills-container">
    <div v-for="(item, i) in props.skills" :key="i" class="tree-container">
      <h3>{{ item.type }}</h3>
      <ul class="tree">
        <li v-for="(value, key) in item.skills" :key="key">
          <ul class="level">
            <li v-for="(arr, j) in value" :key="j" class="element">
              {{ arr.title }}
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

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .tree-container {
    min-width: fit-content;

    h3 {
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .tree {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .level {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .element {
          border: 1px solid yellow;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
}
</style>
