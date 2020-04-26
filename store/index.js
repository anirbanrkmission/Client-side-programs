import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    change(state, login) {
      state.loggedIn = login
    }
  },
  actions: {},
  modules: {},
  getters: {
    loggedIn: state => state.loggedIn
  }
})

export default store