import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import he from 'vuetify/lib/locale/he';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Vuetify);
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
    locales: { he },
    current: 'he',
  },
  icons: {
    iconfont: 'fa'
  },
  rtl: true
});
