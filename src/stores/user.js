import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return{
            loggedUser : [],
        }
    },

    actions: {
        setLoggedUser(user){
            this.loggedUser = [user]
        },
        destroyLoggedUser(){
            this.loggedUser = []
        },
    },
    
    getters: {
        getLoggedUser() {
          return this.loggedUser
        },
        getLengthUser(){
          return this.loggedUser.length
        }
    },
    persist: {
        storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
      },
})
