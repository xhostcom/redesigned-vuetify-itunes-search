<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex">
        <v-img
          alt="iTunes Logo"
          class="shrink mr-2"
          contain
          src="./assets/ituneslight.webp"
          transition="scale-transition"
          width="40"
        />
       </div>
       <div class="d-flex">
        <v-img
          alt="iTunes Name"
          class="shrink"
          contain
          min-width="100"
          src="./assets/itunes.webp"
          width="100"
        />
         <v-spacer></v-spacer>
         <div class="text-center">
           <v-img
          alt="iTunes Logo"

          contain
          src="./assets/apple.webp"
          transition="scale-transition"
          width="40"
        />
         </div>
         </div>
      <v-spacer></v-spacer>
      <v-btn to="/" icon>
       <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
    <Index/>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Index from '@/components/Index';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
    Index,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
