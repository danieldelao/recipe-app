<template>
    <v-app class="main-background-color">
        <div id='login'>
            <h1>Welcome back!</h1>
	    </div>

        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Password"
        required
        ></v-text-field>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Log In
        </v-btn>
        <p>Don't have an account? 
            <a href="/sign-up">Sign Up.</a>
        </p>

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
      color: black;
  }
</style>




