<template>
    <v-container fluid>
        <v-layout justify-center column pa-12 >
            
            <v-row pa-12>

            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                <recipe-card @bookmark='console.log($event)' title="strawberry icecream"></recipe-card>
          </v-col>
        </v-row>
      </v-container>
            </v-row>
        </v-layout>
    </v-container>
    
</template>

<script>
import recipeCard from "~/components/recipeCard.vue";

export default {
    name: 'app',
    components: {
      recipeCard
    },
    data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
    cards: [
      { title: 'Pesto-Pasta', user: 'Claire', time: '30 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'Lemon Icecream', user: 'Claire', time: '40 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: 'Baked Oatmeal', user: 'Claire', time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Vegetable Gallete', user: 'Claire', time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Potatoe Gnocchi', user: 'Claire',  time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Coconut Rice', user: 'Claire', time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Vegetable Gallete', user: 'Claire', time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Potatoe Gnocchi', user: 'Claire',  time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Coconut Rice', user: 'Claire', time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),
};
</script>

<style scoped>

</style>