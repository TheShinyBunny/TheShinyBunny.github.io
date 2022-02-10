import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/firebase'
import VueGoogleApi from 'vue-google-api'
import { PiniaVuePlugin, createPinia } from 'pinia'
import moment from 'moment'

Vue.config.productionTip = false
const config = {
  apiKey: process.env.VUE_APP_GOOGLE_KEY,
  clientId: process.env.VUE_APP_GOOGLE_CLIENT,
  scope: 'https://www.googleapis.com/auth/youtube',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
}
Vue.use(VueGoogleApi, config)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()


Vue.filter('number',(num)=>{
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})
Vue.filter('firestoreTime', (ts)=>{
  return ts.toDate()
})
Vue.filter('date', (dateStr)=>{
  return moment(dateStr).locale('he').calendar()
})

new Vue({
  router,
  vuetify,
  pinia,
  render: function (h) { return h(App) }
}).$mount('#app')
