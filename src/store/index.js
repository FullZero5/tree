import { defineStore } from "pinia";
import apiService from "../api/service";

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
      (async () => {
        Promise.all([apiService.getRubrics(this.showEmpty?'':'?allowEmpty=1')])
          .then((values) => {
            this.rubrics = values[0];
          })
          .catch((err) => console.log(err));
      })();
    }
  }
});
