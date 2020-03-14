import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      artist: '',
      albums: []
  },
  mutations: {
    updateArtistField(state, field) {
    updateField(state.artist, field);
    },
    updateAlbumsField(state, field) {
    updateField(state.albums, field);
    }
  },
  actions: {},
  getters: {
    getArtistField(state) {
      return getField(state.artist);
    },
    getAlbumsField(state) {
      return getField(state.albums);
    },
    payload: state => state.payload
  }
})
