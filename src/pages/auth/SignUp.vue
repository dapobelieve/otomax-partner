<template>
  <main class="bg-img">
    <login-modal :isOpen="loginModal" @close-modal='loginModal = false' />

    <v-img
      max-height="100%"
      style="opacity: 0.2;"
      :src="require('@/assets/images/test-park.png')"
    ></v-img>

    <div class="top-right">
      <div class="d-flex mb-12 ml-12">
        <h5 class="mr-4 mt-2">Already have an account?</h5>
        <router-link to="login">
          <v-btn elevation="0" small color="#0D1040">
            <span class="font-weight-light text-white"> Login </span>
          </v-btn>
        </router-link>
      </div>
      <form
        class="bg-light-white pa-11 rounded"
        style="width: 448px"
        @submit.prevent="handleSubmit">
        <div class="mb-9">
          <span class="text-h6 font-weight-bold">Sign Up</span>
          <h6 class="font-weight-thin">Create new account</h6>
        </div>
        <div>
          <form-input name='name' v-model="form.name" type="text" placeholder="Full Name" :rules="rules.name" required />
          <form-input name='userName' v-model="form.userName" type="text" placeholder="Username" :rules="rules.username" required />
          <form-input name='email' v-model="form.email" type="email" placeholder="Email Address" :rules="rules.email" required />
          <form-input name='password' v-model="form.password" type="password" placeholder="Password" :rules='rules.password' required />
        </div>
        <div>
          <v-btn elevation="0" large block color="primary" class="mb-7" :loading='loading' type="submit">Sign Up</v-btn>
          <v-btn elevation="0" class="mb-5" block color="white" large @click="loginWithGoogle">
            <img left :src="require('@/assets/images/icon-google.svg')" />
            <span class="ml-3">Sign up with Google</span>
          </v-btn>
          <!-- <v-btn elevation="0" block color="#3B5998" large>
            <img left :src="require('@/assets/images/icon-facebook.svg')" />
            <span class="text-white ml-3">Sign up with Facebook</span>
          </v-btn> -->
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import socialAuth from "@/mixins/socialAuth";  
import FormInput from "@/components/forms/FormInput.vue";
import LoginModal from "@/components/modal/LoginModal.vue";
import SignUpModal from "@/components/modal/SignUpModal.vue";
export default {
  mixins:  [socialAuth],
  name: 'SignUp',
  data: () => ({
    loginModal: false,
    loading: false,
    form: {
      name: '', 
    },
    rules: {
        name: [
            value => !!value || 'Required!.',
            value => (value && value.length >= 2) || 'Name too short',
        ],
        username: [
            value => !!value || 'Required!.',
            value => (value && value.length >= 3) || 'Username is too short',
        ],
        business: [
            value => !!value || 'Required!.',
            value => (value && value.length >= 3) || 'Business name is too short',
        ],
        vat: [
            value => !!value || 'Required!.',
        ],
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
  components: {
    FormInput,
    LoginModal,
    SignUpModal,
  },
  methods: {
    async handleSubmit(e) {
      this.loading = true;
      const names = this.form.name.split(' ')
      this.form.firstName = names[0]
      this.form.lastName = names[1]
      this.form.domain = 'otomax-fleet-ui'

      try {
        if(names.length < 2) {
          throw new Error('Full name required')
        }

        let resRegister = await this.$store.dispatch('auth/register', this.form)
        const {email, password, domain } = this.form
        let res = await this.$store.dispatch('auth/login', {email, password, domain})

        this.$toast.success('Account Created Successfully', {
          type: 'success',

        })
        this.$toast.success('You have been automatically logged in', {
          type: 'info',
          duration: 5000
        })
        this.$router.replace({
          name: 'vehicle-create'
        })
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
    },
    async handleGoogle() {
      try {}
      catch(e) {}
      finally {}
    },
  },
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
