import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Videos from '../views/Videos.vue'
import VideoPage from '../views/VideoPage.vue'
import About from '../views/About'
import Posts from '../views/Posts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/video/:id',
    name: 'Video Page',
    component: VideoPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
