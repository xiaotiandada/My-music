import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    adminToken: null,
    adminUser: null,
    adminIsUserLoggedIn: false
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser(state, user) {
      state.user = user
    },
    setadminToken(state, token) {
      state.adminToken = token
      state.adminIsUserLoggedIn = !!(token)
    },
    setadminUser(state, user) {
      state.adminUser = user
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    setadminToken({ commit }, token) {
      commit('setToken', token)
    },
    setadminUser({ commit }, user) {
      commit('setUser', user)
    }
  }
})
