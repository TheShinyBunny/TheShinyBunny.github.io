<template>
  <v-container>
    <v-progress-circular v-if="Object.keys(posts).length == 0" indeterminate/>
    <div v-else class="d-flex flex-column align-center">
      <create-post class="mb-2" v-if="loggedIn" />
      <v-card class="mb-2" v-for="post in posts" :key="post.id" width="400">
        <v-card-title>{{post.title}}</v-card-title>
        <v-card-text>
          <p class="text-right">{{post.description}}</p>
          <p class="text-left">{{post.createdAt | firestoreTime | date }}</p>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import {firestore} from '../plugins/firebase'
import {collection, orderBy, query, onSnapshot} from 'firebase/firestore'
import CreatePost from '../components/CreatePost.vue'
import { mapState } from 'pinia'
import store from '../store'


export default {
  components: { CreatePost },
  data() {
    return {
      posts: [],
      isOwner: false,
    }
  },
  computed: {
    ...mapState(store,['loggedIn'])
  },
  mounted() {
    const q = query(collection(firestore, 'posts'),orderBy('createdAt','desc'))
    onSnapshot(q,(snapshot)=>{
      this.posts = snapshot.docs.map((d=>({id: d.id, ...d.data()})))
    })
  }
}
</script>

<style>

</style>