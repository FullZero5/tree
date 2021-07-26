<template>
  <div class="md:col-span-1">
    <el-tree
        empty-text="Загрузка"
        :data="rubricator"
        :props="defaultProps"
        default-expand-all
        highlight-current
        show-checkbox
        node-key="id"
        ref="tree"      
        @check="getCheckedNodes"
        
    >  <template #default="{ data }">
        <span class="custom-tree-node">
          <span>
            <a
              :href="'https://www.klerk.ru'+ data.url">
              {{data.title}}
            </a>
            <span class="bg-green-400 text-gray-50 rounded-md px-2 ml-8">
             {{data.count}}
            </span>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useMainStore } from '../store'

export default {
  name:"RubricsTree",
  setup () {
    const tree = ref(null)
    const defaultProps = ref ({label: "title"})
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
      tree,
      defaultProps,
      rubricator: computed(() => main.getRubrics),
      showFn: computed(() => main.setShowEmpty),
      show: computed(() => main.sgetShowEmpty),
      getCheckedNodes
    }  
  }
}
</script>

<style>
  
</style>