<template>
    <v-app class="main-background-color">
        <div id='login'>
            <h1>Add a Recipe</h1>
	    </div>

        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >

        <v-text-field
        v-model="form.name"
        label="Recipe name"
        required
        ></v-text-field>
        
        Estimated Preparation Time
        <!-- <select v-model="form.prepTime">
            <option disabled value="">Time</option>
            <option>5 Min</option>
            <option>10 Min</option>
            <option>15 Min</option>
            <option>30 Min</option>
            <option>45 Min</option>
            <option>1 Hr</option>
            <option>1 Hr 5 Min</option>
            <option>1 Hr 10 Min</option>
        </select> -->
        <!-- <span>{{ selected }}</span> -->
        <v-text-field
        v-model="form.ingredients"
        label="Ingredients"
        required
        ></v-text-field>

        <v-btn
        >
        Add
        </v-btn> 

        <v-btn
        >
        Add Additional ingredient
        </v-btn> 

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
    }
    },
    data () {
        return {
            form: {
                name: "",
                // prepTime,
                ingredients: [],
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