<template>
  <v-card flat style="background-color: #f2f2f2">
    <v-container>
      <v-form ref="form" @submit.prevent="submit" class="app-search-form">
          <v-text-field append-icon="mdi-filter" prepend-icon="mdi-briefcase-search" label="ENTER KEYWORDS TO SEARCH" hide-details="auto"></v-text-field>
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
