<template>
  <div class="md:col-span-1">
    <div class="col-span-6 sm:col-span-3 mb-8 mt-8">
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
    </div>
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
    //nst show = ref(false)
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