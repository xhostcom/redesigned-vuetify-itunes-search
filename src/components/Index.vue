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
export default {
  components: {
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
      searchData () {
         this.$router.push(`results/${this.search}`)
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

