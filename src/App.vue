<template>
  <v-app>
    <Navbar />
    
    <router-view style="margin-top: 190px" />
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'
import store from './store'

export default {
  components: {
    Navbar
  },
  created() {
    store().checkLoggedIn()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
