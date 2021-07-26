<template>
  <div
        class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          v-model="show"
          @click="showFn"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          for="toggle"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
    </div>
    <label for="toggle" class="text-xs text-gray-700">Отображать пустые рубрики</label>
</template>
<script>
import { computed } from 'vue'
import { useMainStore } from '../store'

export default {
  name:"TogleButton",
  setup () {
    const main = useMainStore()
    return {
      showFn: computed(() => main.setShowEmpty),
      show: computed(() => main.sgetShowEmpty)
    }  
  }
}
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
  /* @apply rules for documentation, these do not work as inline style */
  .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68d391;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68d391;
  }
</style>