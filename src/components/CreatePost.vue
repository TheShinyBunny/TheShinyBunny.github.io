<template>
  <div>
    <v-btn v-if="!active" fab color="blue" @click="active = true">
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <v-card v-else min-width="400">
      <v-card-title>
        <v-text-field v-model="title" flat label="כותרת"/>
      </v-card-title>
      <v-card-subtitle>
        <v-textarea v-model="desc" flat label="תוכן ההודעה" />
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="primary" @click="submit">
          פרסום
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {firestore} from '../plugins/firebase'
import {collection, addDoc} from 'firebase/firestore'

export default {
  data() {
    return {
      active: false,
      title: '',
      desc: ''
    }
  },
  methods: {
    submit() {
      addDoc(collection(firestore, 'posts'),{
        title: this.title,
        description: this.desc,
        createdAt: new Date()
      }).then(res=>{
        this.active = false
        this.title = ''
        this.desc = ''
      })
    }
  }
}
</script>

<style>

</style>