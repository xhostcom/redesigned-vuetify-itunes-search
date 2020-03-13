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
          @keyup.enter="searchData(params)"
          label="Enter Artists Name"
          append-icon="search"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <div class="d-block mb-12 mt-12 pa-2 deep-purple accent-4 white--text"><h4 class="display-1">
    Search The iTunes Catalogue
    </h4></div>
    <Card style="display:none;" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { reactive, computed } from "@vue/composition-api";
import Card from '@/components/Card';
  export default {
    name: 'Index',
    components: {
    Card
    },
    setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    const increment = () => state.count++;
    return {
      state,
      increment
      }
    },
    data () {
      return {
      search: ''
      }
    },
    methods: {
      searchData () {}
    }
}
</script>
