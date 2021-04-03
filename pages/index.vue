<template>
    <v-container fluid>
        <v-layout justify-center column pa-12>
            <v-row no-gutters>
                <v-col>
                    <div class="display-4 font-weight-black text-xs-center">HEALTHY MEALS</div>
                    <div class="display-4 font-weight-black text-xs-center mb-3">FOR YOUR TABLE</div>
                    <div class="display-1 font-weight-bold text-xs-center">Finally be a foodie at home with easy, delicious recipes sorted by season.</div>
                    <v-icon large>expand_more</v-icon>
                    <v-btn fab class="mt-5 brown darken-4"></v-btn>
                </v-col>
                <v-col>
                    <img src="../media/pancake-blankets.gif">
                </v-col>
            </v-row>
            <v-row pa-12>

            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                <recipe-card @bookmark='console.log($event)' title="strawberry icecream"></recipe-card>
                  <!-- <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img> -->
              <!-- <v-card-text v-text="card.user"></v-card-text> -->
              <!-- <v-card-text v-text="card.time"></v-card-text> -->
  
              <!-- <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions> -->
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-container>
              <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="../media/pesto-pasta.jpg"
    ></v-img>
    <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
      </v-btn>

    <v-card-title>Pesto Pasta</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          <v-card-text>30 min</v-card-text>
          4.5 (413)
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>Claire Manwaring</v-card-text>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Spring</v-chip>
        <v-chip>Summer</v-chip>
        <v-chip>Fall</v-chip>
        <v-chip>Winter</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
            </v-row>
        </v-layout>
    </v-container>
    
    
  
</template>

<script>
import recipeCard from "../components/recipeCard.vue";

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
      { title: 'Pesto-Pasta', user: 'Claire', season: ['Summer'], time: '30 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
      { title: 'Lemon Icecream', user: 'Claire', season: ['Summer'], time: '40 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
      { title: 'Baked Oatmeal', user: 'Claire', season: ['Spring, Summer, Fall, Winter'], time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Vegetable Gallete', user: 'Claire', season: ['Spring, Summer, Fall, Winter'], time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Potatoe Gnocchi', user: 'Claire', season: ['Spring, Summer, Fall, Winter'], time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Sweet Coconut Rice', user: 'Claire', season: ['Spring, Summer, Fall, Winter'], time: '45 minutes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),
};
</script>

<style scoped>

</style>