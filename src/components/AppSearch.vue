<template>
  <v-card flat>
    <!-- <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Registration successful!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar> -->
    <v-container>
      <v-form ref="form" @submit.prevent="submit" class="app-search-form">
          <v-text-field v-text-field append-icon="mdi-filter" prepend-icon="mdi-briefcase-search" label="Main input" hide-details="auto"></v-text-field>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
        snackbar: false,
        defaultForm,
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first
        )
      },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
  }
</script>
