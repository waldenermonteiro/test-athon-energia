import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import BaseVuex from './plugins/baseVuex'
import Vuelidate from 'vuelidate'
import VueLoading from 'vuejs-loading-plugin'
import './assets/index.scss'
import './assets/buttons.scss'
import './assets/fonts.scss'
Vue.config.productionTip = false

Vue.use(BaseVuex)
Vue.use(Vuelidate)
Vue.use(VueLoading, { text: 'Loading' })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
