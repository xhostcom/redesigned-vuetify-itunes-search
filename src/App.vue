<template>
  <v-app>

  <v-content>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('./assets/itunesicon.webp')"
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
       <h1>Card Contents</h1>
      </v-col>
    </v-row>
  </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
  
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
