<template>
  <v-container>
    <h1>User Page</h1>
    <p> Welcome {{$route.params.id}} </p>
    <router-link
      to='/'
    >
      <v-btn
      color='primary'
      @click="loggedOut()"
    >Logout</v-btn>
    </router-link>
    
  </v-container>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  methods: {
    loggedOut() {
      this.$store.commit('change', false)
    }
  },
}
</script>
