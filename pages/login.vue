<template>
    <v-app class="main-background-color">
        <div id='login'>
            <h1>Welcome back!</h1>
	    </div>

        <v-form
        ref="form"
        lazy-validation
        :model="loginForm"
        :rules="loginRules"
        >

        <v-text-field
        v-model="loginForm.username"
        label="Username"
        required
        prop="username"
        ></v-text-field>

        <v-text-field
        v-model="loginForm.password"
        label="Password"
        required
        prop="password"
        ></v-text-field>

        <v-btn
        color="success"
        class="mr-4"
        @click="login()"
        >
        Log In
        </v-btn>
        <p>Don't have an account? 
            <a href="/sign-up">Sign Up.</a>
        </p>

  </v-form>
    </v-app>
</template>

<script lang="js">
// import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        // AppNavigation
    },
    data () {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                { required: true, message: 'Field required', trigger: 'blur' }
                ],
                password: [
                { required: true, message: 'Field required', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login () {
            // @ts-ignore
            const { username, password } = this.loginForm
            this.$store.dispatch('accounts/authenticate', { username, password }).then(() => {
                this.$router.push('/')
            })
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
      color: black;
  }
</style>




