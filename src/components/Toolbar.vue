<template>
<v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
        <router-link class="title" to="/">iTunes Search</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
    <v-icon>refresh</v-icon>
 </v-btn>
</v-toolbar>
</template>
<script>
export default {

}
</script>
<style scoped>
.title {
    text-decoration: none;
}
</style>