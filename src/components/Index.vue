/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/itunesicon.webp')"
          class="my-3"
          contain
          height="90"
        />
    <v-layout mt-12 mb-12 justify-center align-center>
        <v-flex xs6 mt-12 mb-12>
        <v-text-field
          v-model="search" autofocus
          @keyup.enter="searchData($event)"
          label="Enter Artists Name"
          append-icon="search"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <div class="d-block mb-12 mt-12 pa-2 deep-purple accent-4 white--text"><h4 class="display-1">
        {{ count }}</h4>
      </div>
      <Card style="display:none;" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import store from '../store'
import Card from '@/components/Card';
  export default {
    name: 'Index',
    components: {
    Card
    },
    setup() {

    },
    data () {
      return {}
    },
    computed: {
       count () {
       return store.state.count
    }
    },
    methods: {
    async searchData($event) {
      let config = {
          headers: {
            'Accept': 'application/json'
          }
      }
      let artist = $event.target.value
      const response = await this.$http.get(`https://itunes.apple.com/search?term=${artist}&entity=album`, config);
            this.response = response.data.results
            this.$store.commit(JSON.stringify(response))
            console.log(response)
            store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
    }
  }
}
</script>


