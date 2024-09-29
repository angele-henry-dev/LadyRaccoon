<script setup lang="ts">
// Props
const props = defineProps(['item'])
</script>

<template>
  <div class="card-item">
    <div class="card-frame"></div>
    <div class="card-inner">
      {{ props.item.type }}
    </div>
  </div>
</template>

<style scoped>
.card-item {
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  flex: 0 0 auto;
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
  background-color: var(--vt-c-black-mute);
  border: 1px solid var(--color-border);
  border-radius: 15px;
}

.card-inner {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 57px 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  z-index: 10;
}

.card-active .card-frame {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-color: var(--vt-c-white-mute);
}
.card-active .card-inner {
  color: var(--color-text-oposite);
}
</style>
