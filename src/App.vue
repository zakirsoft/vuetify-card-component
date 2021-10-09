<template>
  <div id="app">
    <v-app id="inspire">
      <app-header />
      <app-search />
      <v-main class="white">
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import AppSearch from './components/AppSearch.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  components: { AppHeader,AppSearch },
}
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>
