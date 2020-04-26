<template>
  <v-container>
    <h1>Home Page</h1>
    <v-text-field
      label='Id'
      v-model="id"
    ></v-text-field>
    <router-link
      :to="{name: 'user', params: {id: id}}"
    >
      <v-btn
        color='primary'
        @click="loggedIn()"
      >Login</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      id: '',
    }
  },
  methods: {
    loggedIn() {
      this.$store.commit('change', true)
      console.log('Login value: ', this.$store.state.loggedIn)
      console.log('Id: ', this.id)
    }
  },
}
</script>