<template>
  <div class="md:col-span-3">
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 sm:px-0 mb-5">
      <li v-for="item in exhibitors" :key="item.id" class="border shadow p-5" v-bind:class="{ 'cursor-pointer': item.active }">
        <div @click="(item.active) ? getExhibitorData(item.id) : null" >
              <figure class="mb-2">
                <img v-if="item.logo" :src="'https://ekatmaster.ru' + item.logo" class="object-contain h-32 w-full" />
                <svg v-else class="object-contain h-32 text-gray-200 w-full p-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </figure>          
              <div>{{ item.name }}</div>
              <div class="text-sm text-gray-400">{{ item.city}}</div>
              <div class="text-sm text-gray-400">{{ item.stand }}</div>
        </div>        
      </li>
    </ul>
  </div>      
</template>

<script>
import { computed } from 'vue'
import { useMainStore } from '../store'
//import apiService from "../api/service"

export default {
  name: 'ExhibitorsList',
  setup () {
    const main = useMainStore()
    const getExhibitorData = (id) => {
      main.setExhibitorID(id)
      main.modalShow()
    }
    return {
      exhibitors: computed(() => main.getExhibitors),
      getExhibitorData
    }
    
  }
  /*data() {
    return {
      exhibitors : {},
      modal : false,
      exhibitorItem : null,
      data : {
        rubrics : []
      }
    }
  },
  async mounted() {   
    this.exhibitors = await apiService.getExhibitors();
  },
  methods : {
    getRubricator() {
      fetch(`https://ekatmaster.ru/api/project/${this.uuid}/${this.culture}/rubricator`)
      .then(result => result.json())
      .then(result => {
          this.rubricator = result
      })
    },
    getExhibitors(url = `https://ekatmaster.ru/api/project/${this.uuid}/${this.culture}/exhibitors`) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.data)
      })
      .then(result => result.json())
      .then(result => {
          this.exhibitors = result
      })
    },   
    closeModal(){
      this.exhibitorItem = null
      this.modal = false
    },      
    async getExhibitorData(id){
      storeMutations.setExhibitorID(id);
      storeMutations.showModal();
    }
  }*/
}
</script>