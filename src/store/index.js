import Vue from 'vue'
import Vuex from 'vuex'

import Crime from '../pages/crimes/store'
import Criminal from '../pages/criminals/store'
import Victim from '../pages/victims/store'
import Weapon from '../pages/weapons/store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Crime,
    Criminal,
    Victim,
    Weapon
  }
})
