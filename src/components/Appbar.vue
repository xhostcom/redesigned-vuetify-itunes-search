<template>
 <v-app-bar
      app
      color="primary"
      dark
    >
    <div class="text-center">
          <v-img
          alt="iTunes Logo"
          class="shrink"
          contain
          src="../assets/apple.webp"
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
          src="../assets/itunes.webp"
          width="100"
        />
       </div>
      <v-spacer></v-spacer>
      <v-btn to="/" icon>
       <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'Appbar'
}
</script>

<style>

</style>
