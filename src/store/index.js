import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      albums: []
    },
    mutations: {
      add (state, payload) {
        state.albums = payload
      }
    }
  });
