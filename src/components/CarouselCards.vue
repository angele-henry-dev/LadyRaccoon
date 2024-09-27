<script setup lang="ts">
// Props
const props = defineProps(['skills'])
</script>

<template>
  <div class="cards-line">
    <div
      v-for="(item, index) in props.skills"
      :key="index"
      :class="`card-item${index === 0 ? ' card-active' : ''}`"
    >
      <div class="card-frame"></div>
      <div class="card-inner">
        {{ item.type }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-line {
  /** 315 par 420 mobile */
  --gap: 10px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}
@media (width > 48em) {
  .cards-line {
    --card-width: 360px;
  }
}
@media (width > 48em) {
  .cards-line {
    --card-height: 480px;
  }
}
@media (width > 20.3125em) {
  .cards-line {
    --card-width: 315px;
  }
}
@media (width < 47.99em) {
  .cards-line {
    --card-height: 420px;
  }
}

.card-item {
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  flex: 0 0 auto;
}
.card-frame {
  -webkit-transform: scale(0.9445, 0.7625);
  transform: scale(0.9445, 0.7625);
  transition:
    background 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
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
.card-active .card-frame {
  -webkit-transform: scale(1);
  transform: scale(1);
  background-color: var(--vt-c-white-mute);
}

.card-inner {
  height: 100%;
  width: 100%;
  padding: 57px 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
