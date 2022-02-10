<template>
  <v-app-bar app fixed color="red" dark prominent src="@/assets/channel_banner.jpg">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-spacer />
    <v-btn icon color="red" v-if="loggedIn" @click="logout()">
      <font-awesome-icon size="xl" icon="fa-solid fa-right-from-bracket" />
    </v-btn>
    <v-btn icon color="red" v-else @click="login()">
      <font-awesome-icon size="xl" icon="fa-solid fa-right-to-bracket" />
    </v-btn>
    <v-btn icon color="red" href="https://youtube.com/shinybunny">
      <v-icon>fab fa-youtube</v-icon>
    </v-btn>
    <v-btn icon color="red" href="https://discord.gg/arUMT5m4w8">
      <v-icon>fab fa-discord</v-icon>
    </v-btn>
    <v-btn icon color="red" href="https://twitter.com/shiny_bunny" class="mr-0">
      <v-icon>fab fa-twitter</v-icon>
    </v-btn>
    <template #extension>
      <v-tabs>
        <v-tab to="/"><v-icon right>fa-home</v-icon> בית</v-tab>
        <v-tab to="/videos"><v-icon right>fa-video</v-icon> סרטונים</v-tab>
        <v-tab to="/downloads"><v-icon right>fa-download</v-icon> הורדות</v-tab>
        <v-tab to="/posts"><v-icon right>fa-comment</v-icon> הודעות</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import store from '../store'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(store,['loggedIn'])
  },
  methods: {
    ...mapActions(store,['login','logout'])
  }
}
</script>

<style scoped>

.logo {
  width: 150px;
}

</style>