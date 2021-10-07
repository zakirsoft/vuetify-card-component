import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarSide, faRedo, faInfo, faRedoAlt, faCloudDownloadAlt, faEdit, faEllipsisV, faVideo, faMapMarkerAlt, faPlay, faTachometerAlt, faGasPump, faSms, faEnvelope, faLaptopCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInfo, faCarSide, faRedo, faRedoAlt, faCloudDownloadAlt, faEdit, faEllipsisV, faVideo, faMapMarkerAlt, faPlay, faTachometerAlt, faGasPump, faSms, faEnvelope, faLaptopCode, faLink, faFacebook, faInstagram, faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
