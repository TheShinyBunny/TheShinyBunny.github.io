<template>
  <v-card>
    <router-link :to="`/video/${video.contentDetails.videoId}`">
      <v-img :src="video.snippet.thumbnails.high.url" aspect-ratio="1.7778"/>
    </router-link>
    <v-card-title style="height: 4em; overflow: hidden; word-break: break-word;">
      {{video.snippet.title}}
    </v-card-title>
    <v-card-subtitle class="mt-3">
      {{video.contentDetails.videoPublishedAt | date}}
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-icon right>fa-thumbs-up</v-icon> {{video.stats.likeCount | number}}
        </v-col>
        <v-col cols="6">
          <v-icon right>fa-eye</v-icon> {{video.stats.viewCount | number}}
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" icon :href="`https://youtu.be/${video.contentDetails.videoId}`" target="_blank">
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'YoutubeVideo',
  props: ['video']
}
</script>

<style lang="scss">

</style>