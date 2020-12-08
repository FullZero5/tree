<template>
  <div class="exhibitors-list">
    <h2 class="mb-5">Список участников</h2>
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="item in exhibitors" :key="item.id" class="border shadow p-5">      
        <div >{{ (item.exhibitor_data.name) ? item.exhibitor_data.name : item.name}}</div>
        <div class="text-sm text-gray-400">{{item.exhibitor_data.country}}, {{item.exhibitor_data.city}}</div>
      </li>
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'ExhibitorsList',
  data() {
    return {
      exhibitors : [],
      uuid : null
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
    }
  }
}
</script>