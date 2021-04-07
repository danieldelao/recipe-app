<template>
    <v-app class="main-background-color">
        <h2 v-if="!authenticated"><NuxtLink to="/login" class="link">Log in</NuxtLink> or <NuxtLink to="/sign-up" class="link">create an account</NuxtLink> to access your recipes.</h2>
    </v-app>
</template>

<script>
export default {
  computed: {
    authenticated () {
      return this.$store.state.accounts.token
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('accounts/logout')
    }
  },
}
</script>

<style scoped>
    .link{
        color:cornflowerblue
    }
</style>
