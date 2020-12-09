<template>
  <div class="exhibitors-list">
    
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="item in exhibitors" :key="item.id">
        <div @click="toggleModal(item)" class="border shadow p-5 cursor-pointer">
          <div >{{ (item.exhibitor_data.name) ? item.exhibitor_data.name : item.name}}</div>
          <div class="text-sm text-gray-400">{{item.exhibitor_data.country}}, {{item.exhibitor_data.city}}</div>
        </div>        
      </li>
    </ul>

    <!-- modal exhibitor data -->
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto" >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div class="inline-block align-top bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                     
            <div class="flex justify-between items-center px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ (exhibitorItem.exhibitor_data.name) ? exhibitorItem.exhibitor_data.name : exhibitorItem.name }}
              </h3>
              <div class="cursor-pointer z-50" @click="toggleModal">
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">               

              <div>{{exhibitorItem.exhibitor_data.country}}</div>
              <div>{{exhibitorItem.exhibitor_data.city}}</div>

              <ul>
                <li v-for="item in exhibitorItem.exhibitor_data" :key="item">
                  {{item}}
                </li>
              </ul>

            </div>       
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ExhibitorsList',
  data() {
    return {
      exhibitors : [],
      uuid : null,
      modal : false,
      exhibitorItem : null
    }
  },
  mounted() {
    this.getUuid()
    this.getData()
  },
  methods : {
    getData() {
      fetch(`https://ekatmaster.ru/api/project/${this.uuid}/exhibitor-list`)
        .then(result => result.json())
        .then(result => {
            this.exhibitors = result.exhibitorList
        })
    },
    getUuid(){
      this.uuid = document.getElementById("app").dataset.uuid
    },
    toggleModal(item) {
      this.exhibitorItem = item
      this.modal = !this.modal
    }
  }
}
</script>