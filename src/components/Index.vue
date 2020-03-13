<template>
  <v-container class="top">
     <div class="d-block mb-12 mt-8 text-center pa-2 info accent-4 white--text"> <h4 class="display-1">
      iTunes Search App
     </h4></div>
      <v-row class="text-center">
      <v-layout mt-12 mb-12 justify-center align-center>
        <v-flex xs6>
        <v-text-field
          v-model="search" autofocus
          @keyup.enter="searchData();"
          label="Enter Artists Name"
          append-icon="search"
          ></v-text-field>
         </v-flex>
      </v-layout>
      <v-col cols="12">
     <Card style="display:none" />
      </v-col>
      <v-col class="mt-12">
       <div>
    <div class="d-block pa-2 success accent-4 white--text"><h4 class="display-1">
    Search The iTunes Catalogue
    </h4></div>
   </div>
    </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'
  export default {
    name: 'Index',
    components: {
      Card
    },
   data: () => ({

  }),
}
</script>
<style  scoped>
.top {
  margin-top: 60px;
}
</style>
