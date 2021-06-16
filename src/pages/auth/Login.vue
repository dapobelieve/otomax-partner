<template>
  <main class="bg-img">
    <sign-up-modal :isOpen="loginModal" @close-modal='loginModal = false' />
    <v-img
      max-height="100%"
      style="opacity: 0.2;"
      :src="require('@/assets/images/test-park.png')"
    ></v-img>

    <div class="top-right">
      <div class="d-flex mb-12 ml-12">
        <h5 class="mr-4 mt-2">Don't have an account? </h5>
        <v-btn elevation="0" href='/account/sign-up' small color="#0D1040"> 
          <span class="font-weight-light text-white"> Sign Up </span>
        </v-btn>
      </div>
      <div
        class="bg-light-white pa-11 rounded"
        style="width: 448px"
      >
        <form @submit.prevent='handleSubmit'>
          <div class="mb-9">
            <span class="text-h6 font-weight-bold">Login</span>
            <h6 class="font-weight-thin">Login to your account</h6>
          </div>
          <div>
            <form-input v-model="form.email" name='email' type="email" placeholder="Email Address" :rules="rules.email" />
            <form-input v-model="form.password" name='password' type="password" placeholder="Password" :rules="rules.password" />
          </div>
          <div class="d-flex justify-space-between">
            <v-checkbox v-model="checkbox">
              <template v-slot:label>
                <div>
                  Remember me
                </div>
              </template>
            </v-checkbox>
            <router-link to="forget-password" class="mt-5 font-weight-thin point">
                Forget password
            </router-link> 
          </div> 

          <div>
            <v-btn elevation="0" large block color="primary" class="mb-7" type='submit' :loading='loading'> Login</v-btn>
            <v-btn elevation="0" class="mb-5" block color="white" large>
              <img left :src="require('@/assets/images/icon-google.svg')" />
              <span class="ml-3">Login with Google</span>
            </v-btn>
            <!-- <v-btn elevation="0" block color="#3B5998" large>
              <img left :src="require('@/assets/images/icon-facebook.svg')" />
              <span class="text-white ml-3">Login with Facebook</span>
            </v-btn> -->
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
// import { mapGetters } from 'vuex'
import FormInput from "@/components/forms/FormInput";
import SignUpModal from "@/components/modal/SignUpModal.vue";
export default {
  data: () => ({
    loginModal: false,
    checkbox: false,
    loading: false,
    form: {},
    rules: {
        email: [
            value => !!value || 'Required!.',
            value => (value && !value.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) || 'Invalid email'
        ],
        password:  [
            value => !!value || 'Required!.',
            value => (value && value.length >= 6) || 'Password too short'
        ],
    },
  }),
  computed: {
    // ...mapGetters({
    //   isLoggedIn: 'auth/isAuthenticated',
    // })
  },
  components: {
    FormInput,
    SignUpModal,
  },
  methods: {
    async handleSubmit(e) {
      this.form.domain = "otomax-fleet-ui"
      this.loading = true;
      try {
        await this.$store.dispatch('auth/login', {
          ...this.form
        })

        this.$toast.success('Login Successful')
        this.$router.replace('/')        
      }
      catch(err) {
        const { error } = err
        if(error)
          this.$toast.error(error.response.data.message)
        else
           this.$toast.error(err.message)
      }
      finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
  .top-right {
    position: absolute;
    top: 50px;
    right: 150px;
  }

  .rounded {
    border-radius: 33px !important;
  }

  .point {
    cursor: pointer;
  }
</style>
