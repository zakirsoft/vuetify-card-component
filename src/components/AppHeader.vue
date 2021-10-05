<template>
  <v-app id="inspire">
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

        <v-responsive max-width="260">
          <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
          mdi-reload
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="white lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- Vue Template HTML Markup -->
  </v-app>
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
