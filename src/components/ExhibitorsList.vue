<template>
  <div class="exhibitors-list">
    <h1>Список участников</h1>
    <ul v-for="item in exhibitors" :key="item.id" class="bg-black text-white">
      <li>{{item.name}}</li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
