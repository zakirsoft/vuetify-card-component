<template>
  <div class="white">
    <v-container>
        <v-sheet min-height="70vh" rounded="lg">
          <post-card />
        </v-sheet>
    </v-container>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
  export default {
    components: { PostCard },
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>
