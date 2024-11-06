import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', () => {
  const displayScrollY = ref(0)
  function set(val) {
    displayScrollY.value = val
  }

  return { displayScrollY, set }
})
