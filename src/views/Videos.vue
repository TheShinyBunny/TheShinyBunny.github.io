<template>
  <v-container>
    <div v-if="loading">
      <v-row>
        <v-col cols="3">
          <v-skeleton-loader type="card-heading" class="tab-loading"></v-skeleton-loader>
          <v-skeleton-loader type="card-heading" class="tab-loading"></v-skeleton-loader>
          <v-skeleton-loader type="card-heading" class="tab-loading"></v-skeleton-loader>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col v-for="j of 12" :key="j" cols="12" sm="6" md="4">
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="3">
          <v-list>
            <v-list-item ripple dense v-for="playlist of serieses" @click="changeSeries(playlist)" :key="playlist.name">
              <v-list-item-icon>
                <v-icon right>{{playlist.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-right">
                <v-list-item-title>{{playlist.label}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col v-for="video of videos" :key="video.id" cols="12" sm="6" md="4">
              <VideoCard :video="video" />
            </v-col>
          </v-row>
          <v-btn color="primary" class="mt-2" :disabled="!nextPageKey || loadingMore" :loading="loadingMore" @click="loadMore">
            טען עוד
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import VideoCard from '@/components/VideoCard'

const allVideos = 'UUJgU3RNlNqqRj7WBwSbizAw'

export default {
  name: 'Videos',
  components: {
    VideoCard
  },
  data() {
    return {
      loading: true,
      loadingMore: false,
      videos: [],
      nextPageKey: '',
      selectedPlaylist: allVideos,
      serieses: [
        {
          name: 'All',
          label: 'כל הסרטונים',
          playlist: allVideos,
          icon: 'fa-video'
        },
        {
          name: 'Survival',
          label: 'הישרדות',
          playlist: 'PLyRyRac1kDHiErRrw_IK0W0Os5T4pgroy',
          icon: 'fa-heart'
        },
        {
          name: 'Nightfall',
          label: 'נייטפול',
          playlist: allVideos,
          icon: 'fa-moon'
        }
      ]
    }
  },
  created() {
    this.loadVideos().then(()=>{
      this.loading = false
    })
  },
  methods: {
    loadVideos(page) {
      return new Promise((res,rej)=>{
        this.$gapi._libraryInit('client').then(client=>{
          client.youtube.playlistItems.list({
            part: ['snippet','contentDetails','status'],
            playlistId: this.selectedPlaylist,
            pageToken: page,
            maxResults: 24
          }).then(({result})=>{
            this.nextPageKey = result.nextPageToken
            let vids = [...result.items]
            client.youtube.videos.list({
              part: ['statistics'],
              id: vids.map(v=>v.contentDetails.videoId).join(',')
            }).then(({result: statRes})=>{
              vids.forEach((vid,i)=>{
                vid.stats = statRes.items[i].statistics
              })
              this.videos.push(...vids)
              res()
            })
          }).catch(rej)
        }).catch(rej)
      })
    },
    loadMore() {
      this.loadingMore = true
      this.loadVideos(this.nextPageKey).then(()=>{
        this.loadingMore = false
      })
    },
    changeSeries(series) {
      this.selectedPlaylist = series.playlist
      this.videos = []
      this.loading = true
      this.loadVideos().then(()=>{
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
.tab-loading {
  margin-bottom: 10px;

  &>div {
    width: 100%;
  }
}
</style>