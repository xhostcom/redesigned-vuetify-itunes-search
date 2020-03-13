import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      albums: [],
      message: 'Hello Vuex!'
  },
    mutations: {
      add (state, payload) {
        state.albums = payload
      }
  },
  actions: {},
  getters: {}
})
