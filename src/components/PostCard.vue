<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="n in 4" :key="n" xl="3" lg="4" md="6" sm="12" xs="12">
        <v-hover v-slot="{ hover }">
          <v-card elevation="0" outlined class="rounded-lg" style="overflow: hidden; margin: 15px 0;">
            <div style="position: relative" class="post-card-gallery">
              <v-carousel :show-arrows="false" height="300">
                <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
              </v-carousel>

                <v-btn v-if="hover" depressed tile absolute top right style="top: 0; right: 0" class="rounded-bl-lg rounded-tr-lg white--text" color="blue" height="50">
                  <v-icon>mdi-link-variant</v-icon>
                </v-btn>
            </div>
            <v-card-actions class="d-flex pa-0">
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'blue' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-facebook</v-icon>
                  <span class="caption font-weight-bold">2137</span>
                </div>
              </v-btn>
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'pink lighten-2' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-instagram</v-icon>
                  <span class="caption font-weight-bold">539</span>
                </div>
              </v-btn>
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'red darken-1' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-youtube</v-icon>
                  <span class="caption font-weight-bold">275</span>
                </div>
              </v-btn>
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'green lighten-1' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-whatsapp</v-icon>
                  <span class="caption font-weight-bold">7</span>
                </div>
              </v-btn>
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'teal lighten-2' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-email</v-icon>
                  <span class="caption font-weight-bold">7</span>
                </div>
              </v-btn>
              <v-btn depressed tile class="flex-grow-1 flex-shrink-1 white--text ms-0" height="60" :class="hover ? 'cyan lighten-1' : ' grey darken-1'">
                <div class="d-flex flex-column">
                  <v-icon>mdi-remote-desktop</v-icon>
                  <span class="caption font-weight-bold">436</span>
                </div>
              </v-btn>
            </v-card-actions>
            <v-card-text class="pt-6" style="position: relative;">
              <div class="d-flex justify-space-between align-center">
                <p class="mb-0">
                  <v-icon small>mdi-map-marker</v-icon>
                  Weillington City, Wellington
                </p>
                <v-btn depressed color="blue" class="rounded-pill white--text text-lowercase font-weight-light bg-color">
                  used in <strong> 5 </strong> videos
                  <v-icon small>mdi-play</v-icon>
                </v-btn>
              </div>
              <h2 class="font-weight-bold black--text text headline mt-3 mb-2">
                2016 toyota Land Cruiser Vx
              </h2>
              <div class="d-flex flex-wrap align-center">
                <p class="subtitle-1 font-weight-normal mb-0 mr-4 grey--text">Awesome turbo diesel V8</p>
                <p class="caption font-weight-medium text-secondary mb-0">Number plate: NDG639</p>
              </div>
              <div class="d-flex flex-wrap py-5">
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-cart</v-icon>
                  <strong>82,000 Km</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-car</v-icon>
                  <strong>RV/SUV</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-car-seat</v-icon>
                  <strong>8</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-water-boiler</v-icon>
                  <strong>Diesel</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-speedometer</v-icon>
                  <strong>4461cc</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  Exterior Colour: <strong>White</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  Doors: <strong>5 door</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <v-icon small>mdi-sitemap</v-icon>
                  <strong>Automatic</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  Cylinders: <strong> 8 cylinder</strong>
                </v-btn>
                <v-btn outlined small text class="rounded-pill grey--text me-2 mb-2 text-capitalize">
                  <strong>4WD</strong>
                </v-btn>
              </div>
              <v-btn tile depressed large block color="blue" class="white--text rounded-pill bg-color" style="position: relative">
                <div class="video-icon">
                  <v-icon>mdi-video-plus</v-icon>
                </div>
                Create Video
              </v-btn>
            </v-card-text>
            <v-card-actions class="grey lighten-4 d-flex justify-space-between">
              <v-btn icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-reload</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-cloud-download</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-file-document-edit-outline</v-icon>
              </v-btn>
              <v-menu transition="slide-y-transition" bottom :left="true">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item key="1">
                    <v-list-item-title> Demo Menu 1 </v-list-item-title>
                  </v-list-item>
                  <v-list-item key="2">
                    <v-list-item-title> Demo Menu 2 </v-list-item-title>
                  </v-list-item>
                  <v-list-item key="3">
                    <v-list-item-title> Demo Menu 3 </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    card: { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    
    cards: [
      { title: 'One-two homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'Ostir homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'mashalah homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'asdf homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 }
    ],
    items: [
      {
        src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      },
      { 
        src: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      },
      {
        src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      { 
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      { 
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
    ],  
  }),
}
</script>

<style>

</style>
