import { defineStore } from 'pinia'
import apiService from "../api/service"

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    modal: false,
    selectExhibitorID: null,
    selectExhibitor: {},   
    rubrics: [],
    exhibitors: [],
    selectRubrics:[]
  }),
  getters: {
    getTotal: (state) =>{
      return state.exhibitors.total
    },
    getPer_page: (state) =>{
      return state.exhibitors.per_page 
    },
    getFrom: (state) => {
      return state.exhibitors.from
    },
    getLinks:(state) => {
      return state.exhibitors.links
    },
    getTo: (state) => {
      return state.exhibitors.to
    },
    getPrev_page_url:(state) => {
      return state.exhibitors.prev_page_url
    },
    getNext_page_url:(state) => {
      return state.exhibitors.next_page_url
    },
    getModal:(state) => {
      return state.modal
    },
    getExhibitors:(state) => {
      return state.exhibitors.data
    },
    getRubrics:(state) =>{
      return state.rubrics
    },
    getSelectExhibitor:(state) => {
      return state.selectExhibitor
    }
  },
  actions: {
    async setSelectRubrics(value){
      this.selectRubrics = value
      this.exhibitors = await apiService.getExhibitors(1, this.selectRubrics)
    },
    setExhibitorID(value) {
      this.selectExhibitorID = value  
    },
    async modalShow(){
      this.selectExhibitor = await apiService.getExhibitor(this.selectExhibitorID)
      this.modal = !this.modal
    },
    init(){
      /* Zakostyleno specially for Usenko */
      (async () => {
        Promise.all([
          apiService.getRubricator(),
          apiService.getExhibitors()
        ]).then(values => {
            this.rubrics = values[0]
            this.exhibitors = values[1]
          }).catch(err=>console.log(err))
      })()
    },
    closeModal(){
      this.modal = !this.modal
    },
    async actionsGetExhibitors(page){
      this.exhibitors = await apiService.getExhibitors(page, this.selectRubrics)
    }
  },
})