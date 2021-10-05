<template>
    <v-app-bar color="grey lighten-3" flat dense class="flex-grow-0" >
      <v-container class="py-0 fill-height">
        <v-hover v-slot="{ hover }" v-for="link in links" :key="link">
            <v-btn
            :text="!hover" :depressed="hover" tile :color=" hover ? 'blue white--text' : ''"
            class="font-weight-medium" height="48"
          >
            {{ link }}
          </v-btn>
        </v-hover>
        
        <!-- <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar> -->
        <!-- <v-btn v-for="link in links" :key="link" text tile height="48" color="blue" class="black--text">
          {{ link }}
        </v-btn> -->

        <!-- <v-btn
          depressed tile :color=" hover ? 'blue white--text' : 'black--text'"
          class="font-weight-medium" height="48"
        >
          Primary
        </v-btn>
        <v-btn
          depressed tile
          class="font-weight-bold" height="48"
        >
          Primary
        </v-btn> -->

        <v-spacer></v-spacer>

        <v-responsive max-width="30">
          <!-- <v-text-field dense flat hide-details rounded solo-inverted></v-text-field> -->
          <v-icon class="black--text">mdi-reload</v-icon>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Create New Video',
        'All Rendered Videos',
        'All Stats',
        'all Vehicles',
      ],

        rules: {
          age: [
            val => val < 10 || `I don't believe you!`,
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
    }),
  }
</script>

<style>

/* .v-btn:hover,
.v-btn:focus {
  color: white !important;
}

.v-btn:hover:before,
.v-btn:focus:before {
  background-color: #3079FF !important;
  opacity: 1 !important;
} */
</style>
