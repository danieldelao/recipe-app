<template>
    <v-app class="main-background-color">
        <v-container class="recipeBlock" pa-16>
            <v-row>
            <v-col md="9">
            <v-row>
                <v-col>
                    <h1> {{title}}
                    </h1>
                    <h2>
                        Estimated Preparation Time: {{time}}
                    </h2>
                    <h2>
                        Added by: {{user}}
                    </h2>
                </v-col>
                <v-col>
                    <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="300"
                        max-width="500"
                        src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                </v-col>
            </v-row>
            
            
            <h3>
                Ingredients:
            </h3>
            <ul>
                <li v-for="item in ingredients" v-bind:key="item.ingredient">{{ item.ingredient }}</li>
            </ul>
            <br>
            <h3>
                Steps:
            </h3>
            <ul>
                <li v-for="item in steps" v-bind:key="item.step">{{ item.step }}</li>
            </ul>
            </v-col>
            </v-row>
        </v-container>
        
    </v-app>
</template>

<script>
// import AppNavigation from '@/components/AppNavigation';
import { mapState } from "vuex";

// computed: {
//  ...mapState(["storedata"]),
//  product() {
//    return this.storedata.find(el => el.recipeId === this.recipeId);
//  }
// },

export default {
    data: () => ({
        recipeId: this.$route.params.id,
        title: 'Pesto-Pasta', 
        user: 'Claire', 
        time: '30 minutes', 
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
        ingredients: [
            {ingredient: '1 squash'},
            {ingredient: '2 cans black beans'},
            {ingredient: 'handful of frozen peas'},
            {ingredient: '2 cups cooked rice'},
            {ingredient: '1 can coconut milk'},
        ],
        steps: [
            {step: 'Mix some stuff together'},
            {step: 'Then cook it all up'},
            {step: 'Then let it cool'},
            {step: 'Enjoy it thoroughly'},
            {step: 'Digest'},
            {step: 'Do the neverending dishes'},
        ],
        // flex: 4
  }),
}
</script>

<style scoped>
    
    .main-background-color{
    background-color: #fbe9e7
  }
  a{
      color: black;
  }
  .recipeBlock{
      
  }
</style>




