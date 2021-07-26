import { defineStore } from "pinia";
//import apiService from "../api/service";
import axios from "axios"

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    rubrics: [],
    selectRubrics:[],
    showEmpty: true
  }),
  getters: {
    getRubrics: (state) => {
      return state.rubrics;
    },
    getShowEmpty: (state) => {
      return state.showEmpty;
    }
  },
  actions: {
    setSelectRubrics(value){
      this.selectRubrics = value
    },
    setShowEmpty(){
      this.showEmpty = !this.showEmpty
      this.rubrics = [];
      this.init()
    },
    init() {
        /*apiService.getRubrics(this.showEmpty?'':'?allowEmpty=1')
          .then((values) => {
            this.rubrics = values;
          })
          .catch((err) => console.log(err));*/
          let params = {
            allowEmpty: 1
          }
          params = !this.showEmpty? params:{}
          axios.get("https://www.klerk.ru/yindex.php/v3/event/rubrics", { params })
          .then((response) => {
            this.rubrics = response.data;
          })
          .catch((err) => console.error(err));
    }
  }
});
