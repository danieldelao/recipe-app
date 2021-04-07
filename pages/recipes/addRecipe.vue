<template>
    <v-app class="main-background-color">
        <div id='login'>
            <h1>Add a Recipe</h1>
	    </div>

        <v-form
        ref="form"
        lazy-validation
        >

        <v-text-field
        v-model="form.name"
        label="Recipe name"
        required
        ></v-text-field>
        
        Estimated Preparation Time:
        <v-select label="Select Time" outlined v-model="form.prepTime" :items="items">
            <!-- <option disabled value="">Time</option>
            <option>5 Min</option>
            <option>10 Min</option>
            <option>15 Min</option>
            <option>30 Min</option>
            <option>45 Min</option>
            <option>1 Hr</option>
            <option>1 Hr 5 Min</option>
            <option>1 Hr 10 Min</option> -->
        </v-select>
        <!-- <span>{{ selected }}</span> -->
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
        <v-text-field
        v-model="form.ingredients"
        label="Ingredients"
        required
        filled
        dense
        ></v-text-field>
        </v-col>

        <v-btn @click="addIngredient"
        >
        Add Additional ingredient
        </v-btn> 

        <div
                v-for="(ingredient, counter) in form.ingredients"
                v-bind:key="counter">
            <span @click="deleteIngredient(counter)">x</span>
            <label>Ingredient {{counter+1}}</label>
            <input type="text" v-model="ingredient.previous" required> 
        </div>

        Steps

        <v-text-field
        v-model="form.steps"
        label="Step 1"
        required
        ></v-text-field>

        <v-btn
        >
        Add
        </v-btn>

        <v-btn
        >
        Add Additional step
        </v-btn> 

        Add image
        <v-btn
        >
        Upload from Computer
        </v-btn>

        <v-btn
        color="success"
        class="mr-4"
        @click="createRecipe()"
        >
        Submit Recipe
        </v-btn>

  </v-form>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    },
    methods: {
        createTasklist () {
            this.$store.dispatch('recipes/add', this.form.name)
        },
        addIngredient(){
            this.ingredients.push({
                ingredient:''
        })
        },
        deleteIngredient(counter){
            this.ingredients.splice(counter,1);
        }
    },
    data () { 
        return {
            items: ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min', '50 min', '55 min', '1 hr'],
            form: {
                name: "",
                prepTime: "",
                ingredients: [{
                    ingredient: ''
                }],
                steps: []
            },
            
        }
    }
}

</script>

<style scoped>
    #login {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		/* height: 10%; */
	}
    .main-background-color{
    background-color: #fbe9e7
  }
  a{
      color: black
  }
</style>