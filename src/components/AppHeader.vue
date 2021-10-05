<template>
    <v-app-bar color="grey lighten-3" flat dense class="flex-grow-0" >
      <v-container class="py-0 fill-height">
        <v-hover v-slot="{ hover }" v-for="link in links" :key="link">
          <v-btn :text="!hover" :depressed="hover" tile :color=" hover ? 'blue white--text' : ''" class="font-weight-medium" height="48">
            {{ link }}
          </v-btn>
        </v-hover>
        <v-spacer></v-spacer>
        <v-responsive max-width="30">
          <v-icon class="black--text">mdi-reload</v-icon>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      activeMenu: 'all Vehicles',
      links: [
        'Create New Video',
        'All Rendered Videos',
        'All Stats',
        'all Vehicles',
      ],
      rules: {
        name: [val => (val || '').length > 0 || 'This field is required'],
      },
    }),
  }
</script>

<style>

</style>
