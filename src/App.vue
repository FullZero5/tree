<template>
  <div class="exhibitors-list max-w-screen-xl mx-auto">
    <div class="md:grid md:grid-cols-4 md:gap-6">
     <rubrics-tree />    
    </div>
  </div>
</template>

<script>
import RubricsTree from './components/RubricsTree'
import { useMainStore } from '@/store'

export default {
  name: 'App',
  components: {
    RubricsTree
  },
  setup() {
    const main = useMainStore()
    main.init()
  }  
}
</script>