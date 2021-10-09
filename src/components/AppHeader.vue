<template>
  <div>
    <v-app-bar color="grey lighten-3" flat dense class="flex-grow-0 app-header hidden-sm-and-down">
      <v-container class="py-0 fill-height">
        <v-hover v-slot="{ hover }" v-for="link in links" :key="link">
          <v-btn active-class="highlighted" :text="!hover" :depressed="hover" tile
            :color=" hover ? 'blue white--text' : ''" class="font-weight-medium" height="48">
            {{ link }}
          </v-btn>
        </v-hover>
        <v-spacer></v-spacer>
        <v-responsive max-width="50">
          <v-btn icon class="black--text">
            <v-icon>mdi-reload</v-icon>
          </v-btn>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer clipped floating temporary app v-model="drawer" class="mobile-menu">
      <v-hover v-slot="{ hover }" v-for="link in links" :key="link">
        <v-btn active-class="highlighted" :text="!hover" :depressed="hover" tile
          :color=" hover ? 'blue white--text' : ''" class="font-weight-medium" height="48">
          {{ link }}
        </v-btn>
      </v-hover>
    </v-navigation-drawer>
    <v-toolbar color="grey lighten-1" fixed class="hidden-md-and-up">
      <v-app-bar-nav-icon @click="drawer = !drawer;"></v-app-bar-nav-icon>
      <v-toolbar-title>App Name</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
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
