import { defineStore } from 'pinia'

export const useTempSearchStore = defineStore('tempsearch', {
    state: () => {
        return{
            tempSearch : "",
        }
    },

    actions: {
        setTempSearch(tempsearch){
            this.tempSearch = tempsearch
        },
        destroyTempSearch(){
            this.tempSearch = []
        },
        resetToInitialState() {
            const initialState = this.$state();
            this.$reset(initialState);
          },
    },
    
    getters: {
        getTempSearch() {
          return this.tempSearch
        },
        getLengthTempSearch(){
          return this.tempSearch.length
        }
    },
    persist: {
        storage: sessionStorage, 
      },
})
