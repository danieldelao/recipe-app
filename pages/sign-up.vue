<template>
    <v-app class="main-background-color">
        <div id='login'>
            <h1>Welcome!</h1>
	    </div>

        <v-form
        ref="form"
        lazy-validation
        >

        <v-text-field
        v-model="createForm.username"
        label="Username"
        required
        ></v-text-field>

        <v-text-field
        v-model="createForm.password"
        :counter="10"
        label="Password"
        required
        ></v-text-field>

        <v-btn
        color="success"
        class="mr-4"
        @click="createAccount()"
        >
        Create Account
        </v-btn>

        <p>Already have an account? 
            <a href="/login">Log in.</a>
        </p>

  </v-form>
    </v-app>
</template>

<script lang="js">
// import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    data () {
        return {
            createForm: {
                username: '',
                password: ''
            }
        }
    },
    components: {
        // AppNavigation
    },
    methods: {
    createAccount () {
        const { username, password } = this.createForm
            const success = this.$store.dispatch('accounts/create', { 
                username, 
                password 
                })
                if (success) {
                    // this.$notify({
                    // type: 'success',
                    // title: 'Success',
                    // message: 'Account created.'
                    // })
                    this.$router.push('/recipes/discover')
                }
                
            //     .then(() => {
            //     this.$router.push('/')
            // }
            // )
    //   const f = this.createForm
    //   const { username, password } = f

    //   // @ts-ignore
    //   this.$refs.createForm.validate(async (valid) => {
    //     if (valid) {
    //       const success = await this.$store.dispatch('accounts/create', {
    //         username,
    //         password
    //       })
    //       if (success) {
    //         this.$notify({
    //           type: 'success',
    //           title: 'Success',
    //           message: 'Account created.'
    //         })
    //         this.$router.push('/login')
    //       }
    //     } else {
    //       this.$notify({
    //         type: 'error',
    //         title: 'Error',
    //         message: 'Form has one or more errors.'
    //       })
    //       f.password = ''
    //       f.password2 = ''
    //     }
    //   })
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




