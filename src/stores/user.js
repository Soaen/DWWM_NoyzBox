import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return{
            loggedUser : [],
        }
    },

    actions: {
        setLoggedUser(user){
            this.loggedUser = user
        },
        destroyLoggedUser(){
            this.loggedUser = {}
        },
    },
    
    getters: {
        getLoggedUser() {
          return this.loggedUser
        },
    },
})
