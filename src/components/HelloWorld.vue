<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <v-layout justify-center align-center>
      <h1>Search iTunes</h1>
      <br/>
      <v-flex xs6>
        <v-text-field
          v-model="search" autofocus
          @keyup="updateData();"
          label="Enter Artist Name"
          append-icon="search"
       ></v-text-field>
      </v-flex>
</v-layout>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: []
    }),
  }
</script>

<style>
* {
  text-align: center;
}


h1 {
  padding: 20px;
}
</style>
 
