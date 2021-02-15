<template>
  <div class="md:col-span-1">
    <div class="col-span-6 sm:col-span-3">
      <label class="leading-loose">Рубрикатор</label>
      <input v-model="filterText" type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Фильтр">
    </div>
    <el-tree
        empty-text="Пусто"
        class="filter-tree"
        :data="rubricator"
        :props="defaultProps"
        default-expand-all
        highlight-current
        show-checkbox
        node-key="id"
        :filter-node-method="filterNode"
        ref="tree"      
        @check="getCheckedNodes"
    >
    </el-tree>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useMainStore } from '../store'

export default {
  name:"RubricsTree",
  setup () {
    const filterText = ref(null) 
    const tree = ref(null)
    const defaultProps = ref ({
      id: "id",
      children: "sub",
      label: "text",
    })
    watch(filterText,(value) => {
      tree.value.filter(value.toLowerCase());
    })
    const filterNode = (value, data) =>{
      if (!value) return true;
      return data.text.toLowerCase().indexOf(value) !== -1;
    }
    const getCheckedNodes = () => {
      const data = {}
            data.rubrics = [
        ...new Set([
          ...tree.value.getCheckedKeys(),
          ...tree.value.getHalfCheckedKeys(),
        ]),
      ];
      main.setSelectRubrics(data)
    }
    const main = useMainStore()
    return {
      filterNode,
      filterText,
      tree,
      defaultProps,
      rubricator: computed(() => main.getRubrics),
      getCheckedNodes
    }  
  }
}
</script>
