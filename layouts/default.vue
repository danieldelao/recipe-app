<template>
  <v-app color="deep-orange lighten-5">
      
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="deep-orange darken-1"
    >
    <a href="/">
      <img src="../media/logo.png" height="30px" width="40px" padding="10px">
      <v-toolbar-title class="nav-text inline" v-text="title" />
    </a>
    <v-spacer></v-spacer>
    <v-btn to="/recipes/addRecipe" class="nav-text" text>Add Recipe</v-btn>
      <v-spacer />
    
      <!-- <v-btn text>Menu</v-btn> -->
      <v-spacer></v-spacer>
      <!-- <v-btn icon color="#ffffff">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-btn to="/login" class="nav-text" text>SIGN IN</v-btn>
      <v-btn to="/sign-up" color="deep-orange accent-4" class="nav-text">JOIN</v-btn>
      </v-app-bar>
    <v-main class="main-background-color">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <!-- <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BusyChef'
    }
  }
}
</script>

<style scoped>
  .main-background-color{
    background-color: #fbe9e7
  }
  .nav-text{
    color: #ffffff
  }
  .inline{
    display: inline-block
  }
  a:link {
  text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
</style>
