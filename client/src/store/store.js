import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    isUserLoggedIn: false
  },

  mutations: {
    userLoggin(state, token) {
      state.isUserLoggedIn = !!(token)
    }
  },

  actions: {
    userLoggin({ commit }, token) {
      commit('userLoggin', token)
    }
  }
})
