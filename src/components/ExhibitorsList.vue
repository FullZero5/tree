<template>
  <div class="exhibitors-list">
    
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="item in exhibitors" :key="item.id">
        <div @click="getExhibitorData(item.id)" class="border shadow p-5 cursor-pointer">
          <img :src="'https://ekatmaster.ru' + item.logo" />
          <div>{{ item.name }}</div>
          <div class="text-sm text-gray-400">{{ item.city}}</div>
          <div class="text-sm text-gray-400">{{ item.stand }}</div>
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
        <div class="inline-block align-top bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

          <!-- close modal -->
          <div class="absolute top-3 right-3 cursor-pointer bg-white p-3" @click="closeModal">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>

          <div class="md:grid grid-cols-3 gap-6 p-6">
            <div class="mb-4 sm:mb-0">
              
              <img :src="'https://ekatmaster.ru/' + exhibitorItem.logo" class="mb-3" />
              
              <div>
                <span class="text-sm text-gray-600 mr-2">Тел.</span> {{ exhibitorItem.phone }}
              </div>
              <div>
                <span class="text-sm text-gray-600 mr-2">E-mail</span> {{ exhibitorItem.email }}
              </div>
              <div>
                <span class="text-sm text-gray-600 mr-2">Сайт</span> {{ exhibitorItem.site }}
              </div>
              
            </div>
            <div class="col-span-2">
              <div class="mb-3">
                <span class="text-gray-600 text-sm">Наименование компании</span>
                <div>{{ exhibitorItem.name }}</div>
              </div>
              <div class="mb-3">
                <span class="text-gray-600 text-sm">Адрес</span>
                <div>
                  {{ exhibitorItem.country }}, 
                  {{ exhibitorItem.city }}, 
                  {{ exhibitorItem.address }}
                </div>
              </div>
              <div class="mb-3">
                <span class="text-gray-600 text-sm">Описание компании</span>
                <div>{{ exhibitorItem.description }}</div>
              </div>
              
            </div>
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
      exhibitorItem : null,
      locale : 'ru',
      culture : 'en'
    }
  },
  mounted() {
    this.getUuid()
    this.getCulture()
    this.getExhibitors()
  },
  methods : {
    getExhibitors() {
      fetch(`https://ekatmaster.ru/api/project/${this.uuid}/${this.culture}/exhibitors`)
        .then(result => result.json())
        .then(result => {
            this.exhibitors = result.data
        })
    },
    getUuid(){
      this.uuid = document.getElementById("app").dataset.uuid
    },

    getCulture(){
      this.culture = document.getElementById("app").dataset.culture
    },
    
    // toggleModal(item) {
    //   if(item.active === false) {
    //     this.exhibitorItem = item        
    //   }
    //   this.modal = !this.modal      
    // }


    closeModal(){
      this.exhibitorItem = null
      this.modal = false
    },
      


    getExhibitorData(id){
      fetch(`https://ekatmaster.ru/api/project/${this.uuid}/${this.culture}/exhibitors/${id}`)
        .then(result => result.json())
        .then(result => {
            this.exhibitorItem = result
        })
        this.modal = !this.modal
    }

  }
}
</script>