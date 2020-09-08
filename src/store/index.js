import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    user
  }
})
