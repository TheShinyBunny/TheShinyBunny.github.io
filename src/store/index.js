import { defineStore } from "pinia";
import Vue from "vue";

export default defineStore('main',{
  state() {
    return {
      loggedIn: false
    }
  },
  actions: {
    checkLoggedIn() {
      Vue.prototype.$gapi.isSignedIn().then((state)=>{
        console.log('signed in?',state)
        this.loggedIn = state
      })
    },
    login() {
      Vue.prototype.$gapi.signIn().then((res)=>{
        this.loggedIn = true
      })
    },
    logout() {
      console.log('logging out')
      Vue.prototype.$gapi.signOut().then(()=>{
        this.loggedIn = false
        console.log('logged out')
      })
    }
  }
})