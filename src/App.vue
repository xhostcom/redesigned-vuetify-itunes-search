<template>
  <v-app>
    <v-toolbar dark color="primary">
    <v-toolbar-side-icon to="/"><v-icon>menu</v-icon></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">
      <router-link class="title" to="/">Vuetify iTunes Search</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
  <Index />
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
