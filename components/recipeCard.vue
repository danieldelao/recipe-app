<template>
  <NuxtLink class="tag" to="/recipes/readRecipe">
    <v-card>
                    <v-img
                      :src="src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                <v-card-title v-text="name"></v-card-title>
              </v-img>
              Added by: 
              <v-card-text v-text="user"></v-card-text>
              <v-card-text v-text="prepTime"></v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <!-- <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn> -->
  
                <!-- <v-btn icon @click='$emit("bookmark", recipeID)'>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn> -->
  
                <!-- <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn> -->

                <!-- TODO add logic so that the pencil only shows up if it's the user's recipe -->
                <v-btn class="tag" to="/recipes/editRecipe" icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
    </NuxtLink>
</template>

<script>
export default {
  name: "recipe-card",
  data: function() {
    return {
      // title: 'Pesto-Pasta', 
      // user: '', 
      // time: '', 
      // src: '', 
      // flex
    }
  },
  // props: [
  //   "name",
  //   "user",
  //   "prepTime",
  //   "flex"
  // ]
  props: {
    name: "",
    user: "",
    prepTime: "",
    // flex: {
    //   default: 4
    // },
    src: {
      default: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    }
  }
};
</script>

<style scoped>
  .tag{
    text-decoration: none;
  }
</style>