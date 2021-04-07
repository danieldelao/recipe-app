<template>
    <v-layout justify-center column pa-16>
    <v-app class="main-background-color">
        <div id='login'>
            
            
	    </div>
    <v-card>
        <v-row>
        <v-col md="6">
                <h1>{{title}}</h1>
                <!-- <v-row> -->
                    Added by: {{user}}
                    <!-- <v-card-text v-text="user"></v-card-text> -->
                <!-- </v-row> -->
                <br>
                Estimated preparation time: {{time}}
              
              <!-- <v-card-text v-text="time"></v-card-text> -->
        </v-col>
                <v-col md="6">
                    <v-img
                      :src="src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                    </v-img>
                </v-col>
        </v-row>
             
        <div>
        <!-- <v-row> -->
            <div>
                <h2>Ingredients:</h2>
                
            </div>
            <div>
            <ul>
                <li v-for="item in ingredients" v-bind:key="item.ingredient">{{ item.ingredient }}</li>
            </ul>
            </div>
            <div>
                <h2>Steps:</h2>
            </div>
            <div>
            <ul>
                <li v-for="item in steps" v-bind:key="item.step">{{ item.step }}</li>
            </ul>
            </div>

        <!-- </v-row> -->
        </div>
  
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
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
    </v-app>
    </v-layout>
</template>

<script>
export default {
  name: "recipe",
  data() {
    return {
        title: 'Pesto-Pasta', 
        user: 'Claire',  
        time: '30 minutes', 
        ingredients: [
            {ingredient: "basil"}, 
            {ingredient: "lemon"}, 
            {ingredient: "garlic"}, 
            {ingredient: "basil"}, 
            {ingredient: "pasta"}, 
            {ingredient: "pine nuts"}, 
            {ingredient: "broccoli"}, 
            {ingredient: "rosemary"}, 
            {ingredient: "olive oil"}
        ],
        steps: [
            {step: "Combine all pesto ingredients in a food processor until smooth, season with salt and pepper."},
            {step: "Cook pasta, fry briefly in olive oil."},
            {step: "Saute veggies."},
            {step: "Mix all together."}
        ],
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
        flex: 4 
    }
  }
};
</script>

<style scoped>
    
</style>