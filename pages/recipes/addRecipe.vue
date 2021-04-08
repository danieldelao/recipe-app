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

        <label class="text-gray-600 font-semibold text-lg">Ingredients</label>
        <div
          v-for="(input, index) in form.ingredients"
          :key="`ingredientInput-${index}`"
          class="input wrapper flex items-center"
        >
          <input 
               v-model="input.ingredient"
               type="text" 
               class="h-10 rounded-lg outline-none p-2" 
               placeholder="Enter Ingredient"     
          />
          <!--          Add Svg Icon-->
          <svg
            @click="addField(input, form.ingredients)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="green"
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>

          <!--          Remove Svg Icon-->
          <svg
            v-show="form.ingredients.length > 1"
            @click="removeField(index, form.ingredients)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#EC4899"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
            />
          </svg>
        </div>

        <!-- <v-text-field
        v-model="form.ingredients"
        label="Ingredients"
        required
        filled
        dense
        ></v-text-field> -->
        </v-col>

        <!-- <v-btn @click="addIngredient"
        >
        Add Additional ingredient
        </v-btn>  -->

        <!-- <div
                v-for="(ingredient, counter) in form.ingredients"
                v-bind:key="counter">
            <span @click="deleteIngredient(counter)">x</span>
            <label>Ingredient {{counter+1}}</label>
            <input type="text" v-model="ingredient.previous" required> 
        </div> -->

        <label class="text-gray-600 font-semibold text-lg">Steps</label>
        <div
          v-for="(input, index) in form.steps"
          :key="`stepInput-${index}`"
          class="input wrapper flex items-center"
        >
          <input 
               v-model="input.step"
               type="text" 
               class="h-10 rounded-lg outline-none p-2" 
               placeholder="Enter Step"     
          />
          <!--          Add Svg Icon-->
          <svg
            @click="addField(input, form.steps)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="green"
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>

          <!--          Remove Svg Icon-->
          <svg
            v-show="form.steps.length > 1"
            @click="removeField(index, form.steps)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#EC4899"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
            />
          </svg>
        </div>

        <!-- <v-text-field
        v-model="form.steps"
        label="Step 1"
        required
        ></v-text-field> -->

        <!-- <v-btn
        >
        Add
        </v-btn> -->

        <!-- <v-btn
        >
        Add Additional step
        </v-btn>  -->

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
        createRecipe () {
            const { season, name, preptime } = this.form
            this.$store.dispatch('recipes/createRecipe', { season, name, preptime}).then(() => {
              this.$router.push('/')
            })
        },
        // addIngredient(){
        //     this.ingredients.push({
        //         ingredient:''
        // })
        // },
        // deleteIngredient(counter){
        //     this.ingredients.splice(counter,1);
        // },
        addField(value, fieldType) {
            fieldType.push({ value: "" });
        },
        removeField(index, fieldType) {
            fieldType.splice(index, 1);
        }
    },
    data () { 
        return {
            phoneNumbers: [{ phone: "" }],
            items: ['5 min', '10 min', '15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min', '50 min', '55 min', '1 hr'],
            form: {
                season: "winter",
                name: "",
                preptime: "",
                ingredients: [{
                    ingredient: ""
                }],
                steps: [{
                    step: ""
                }]
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