<template>
  <v-layout class="top" justify-center align-center>
      <v-flex xs6 mt-12>
        <v-text-field
          v-model="search" autofocus
          @keyup.enter="searchData();"
          label="Enter Artists Name"
          append-icon="search"
       ></v-text-field>
      </v-flex>
</v-layout>
</template>
<script>
import axios from 'axios'
export default {
  components: {

  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async searchData ({params, store}) {
    const response = await axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    store.commit('add', response.data.results)
    .then()
    }
  }
}
</script>
<style>
* {
  text-align: center;
}
.top {
  background-color:ghostwhite;
  padding-top: 70px;
}
</style>


<style>
* {
  text-align: center;
}


h1 {
  padding: 20px;
}
</style>

