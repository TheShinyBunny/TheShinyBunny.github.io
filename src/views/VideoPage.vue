<template>
  <div>
    <v-btn right absolute to="/videos" color="secondary"><v-icon left>fa-share</v-icon> חזרה לכל הסרטונים</v-btn>
    <v-container v-if="video">
      <iframe class="video-player" :src="`https://www.youtube.com/embed/${video.id}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <v-row>
        <v-col v-for="(link, index) in links" cols="auto" :key="index">
          <v-tooltip bottom>
            <template #activator="{on, attrs}">
              <v-btn :color="linkColors[index]" :href="link.url" v-on="on" v-bind="attrs">
                <v-icon v-if="link.type == 'download'" left>fa-download</v-icon>
                <v-icon v-if="link.type == 'discord'" left>fab fa-discord</v-icon>
                 {{link.label}}
              </v-btn>
            </template>
            <span>{{link | linkTooltip}}</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <h2 class="text-right">{{video.snippet.title}}</h2>
        </v-col>
        <v-spacer />
        <v-col cols="2">
          <v-icon right>fa-thumbs-up</v-icon> {{video.statistics.likeCount | number}}
        </v-col>
        <v-col cols="2">
          <v-icon right>fa-eye</v-icon> {{video.statistics.viewCount | number}}
        </v-col>
      </v-row>
      <pre class="text-body-2 mt-1 text-right">{{video.snippet.description}}</pre>
    </v-container>
  </div>
</template>

<script>
import {firestore} from '../plugins/firebase'
import {doc, getDoc} from 'firebase/firestore'

export default {
  data() {
    return {
      video: undefined,
      links: [],
      linkColors: [
        'primary',
        'success',
        'secondary',
        'danger'
      ]
    }
  },
  created() {
    this.$gapi._libraryInit('client').then(client=>{
      client.youtube.videos.list({
        part: ['snippet','contentDetails','statistics','player'],
        id: this.$route.params.id,
        maxHeight: this.$vuetify.breakpoint.height - 224
      }).then(({result})=>{
        this.video = result.items[0]
      })
    })

    getDoc(doc(firestore,'video-data',this.$route.params.id)).then(doc=>{
      this.links = doc.get('links')
    })
  },
  filters: {
    linkTooltip(link) {
      switch (link.type) {
        case 'download':
          return link.size
        case 'discord':
          return link.members + ' משתמשים'
      }
    }
  }
}
</script>

<style lang="scss">
.video-player {
  margin-top: 40px;
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>