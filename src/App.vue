<template>
  <div class="exhibitors-list max-w-screen-xl mx-auto">
    <div class="md:grid md:grid-cols-4 md:gap-6">
     <rubrics-tree />    
     <exhibitors-list />
    </div>
     <pagination-list />
     <modal-item />
  </div>
</template>

<script>
import ExhibitorsList from './components/ExhibitorsList'
import RubricsTree from './components/RubricsTree'
import PaginationList from './components/PaginationList'
import ModalItem from './components/ModalItem'
import { useMainStore } from '@/store'

export default {
  name: 'App',
  components: {
    ExhibitorsList,
    RubricsTree,
    PaginationList,
    ModalItem
  },
  setup() {
    const main = useMainStore()
    main.init()
  }  
}
</script>