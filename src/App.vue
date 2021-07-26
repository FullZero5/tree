<template>
  <div class="exhibitors-list max-w-screen-xl mx-auto">
    <div class="md:grid md:grid-cols-4 md:gap-6">
       <div class="col-span-6 sm:col-span-3 mb-8 mt-8">
       <toggle-button /> 
        <div class="mb-8 mt-8">    
         <rubrics-tree />  
        </div> 
      </div>  
    </div>
  </div>
</template>

<script>
import RubricsTree from './components/RubricsTree'
import ToggleButton from './components/ToggleButton'
import { useMainStore } from '@/store'

export default {
  name: 'App',
  components: {
    RubricsTree,
    ToggleButton
  },
  setup() {
    const main = useMainStore()
    main.init()
  }  
}
</script>