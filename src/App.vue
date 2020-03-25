<template>
  <v-app>
  <Appbar />
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
          v-model="localValue"
          autofocus
          @keypress="fetchData"
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
import Appbar from '@/components/Appbar';
import Footer from '@/components/Footer';
export default {
  name: 'App',
   props: {
    value: String
  },
  components: {
  Appbar,
  Footer
  },
  data: () => ({
  localValue: "",
  url_base: 'https://itunes.apple.com/search?entity=album&term=',
  }),
  created () {
      this.localValue = this.value;
      this.$watch("localValue", value => {
      this.$emit("input", value);
  });
 },
 methods: {
      fetchData(e) {
        if (e.key == "Enter") {
          console.log(this.localValue);
       fetch(`${this.url_base}${this.localValue}`)
          .then(response => {
            return response.json();
        })
        .then((data) => {
    console.log(data);
  });
        }
      },
      setResults(results) {
         this.albums = results;

   }
  }
}
</script>
