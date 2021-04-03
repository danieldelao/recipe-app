<template>
    <v-card>
                    <v-img
                      :src="src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                <v-card-title v-text="title"></v-card-title>
              </v-img>
              <v-card-text v-text="user"></v-card-text>
              <v-card-text v-text="time"></v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon @click='$emit("bookmark", recipeID)'>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
</template>

<script>
export default {
  name: "recipe-card",
  data() {
    return {
      // title: 'Pesto-Pasta', 
      user: 'Claire', 
      season: ['Summer'], 
      time: '30 minutes', 
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
      flex: 4 
    }
  },
  props: [
    "title"
  ]
};
</script>
