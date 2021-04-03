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
        v-model="email"
        label="Name"
        required
        ></v-text-field>
        
        Estimated Preparation Time
        <select v-model="selected">
            <option disabled value="">Time</option>
            <option>5 Min</option>
            <option>10 Min</option>
            <option>15 Min</option>
            <option>30 Min</option>
            <option>45 Min</option>
            <option>1 Hr</option>
            <option>1 Hr 5 Min</option>
            <option>1 Hr 10 Min</option>
        </select>
        <!-- <span>{{ selected }}</span> -->

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Add Recipe
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
    }
};
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