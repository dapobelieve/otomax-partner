<template>
  <main class="bg-img">
    <login-modal :isOpen="loginModal" @close-modal='loginModal = false' />

    <v-img
      max-height="100%"
      style="opacity: 0.2;"
      src="../assets/images/test-park.png"
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
        @submit.prevent="handleSubmit"
      >
        <div class="mb-9">
          <span class="text-h6 font-weight-bold">Sign Up</span>
          <h6 class="font-weight-thin">Create new account</h6>
        </div>
        <div>
          <form-input name='name' type="text" placeholder="Full Name" :rules="rules.name" required />
          <form-input name='email' type="email" placeholder="Email Address" :rules="rules.email" required />
          <form-input name='phone' type="text" placeholder="Phone" :rules="rules.phone" required />
          <form-input name='business' type="text" placeholder="Business Name" :rules="rules.business" required />
          <form-input name='vat' type="text" placeholder="VAT" :rules="rules.vat" required />
          <form-input name='password' type="password" placeholder="Password" :rules='rules.password' required />
        </div>
        <div>
          <v-btn elevation="0" large block color="primary" class="mb-7" :loading='loading' type="submit">Sign Up</v-btn>
          <v-btn elevation="0" class="mb-5" block color="white" large @click.prevent='handleGoogle'>
            <img left src="../assets/images/icon-google.svg" />
            <span class="ml-3">Sign up with Google</span>
          </v-btn>
          <v-btn elevation="0" block color="#3B5998" large>
            <img left src="../assets/images/icon-facebook.svg" />
            <span class="text-white ml-3">Sign up with Facebook</span>
          </v-btn>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import FormInput from "../components/forms/FormInput.vue";
import LoginModal from "../components/modal/LoginModal.vue";
import SignUpModal from "../components/modal/SignUpModal.vue";
export default {
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
        phone: [
            value => !!value || 'Required!.',
            value => (value && value.length >= 3) || 'Phone is too short',
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
    handleSubmit(e) {
      this.loading = true;
      const form = new FormData(e.target)
      const [ first, last ] = form.get('name').split(' ')
      form.append('source', 'web');
      form.append('firstName', first)
      form.append('lastName', last)
      form.append('phone', '')

      const data = {}
      form.forEach( (x, b) => {
            data[b] = x
        }) 

      this.$store.dispatch('register', data).then(res => {
        this.$store.dispatch('login', { email: form.get('email'), password: form.get('password') }).then( result => {
          this.loading = false;
          this.$router.push('/profile')
        })
      }).catch(err => {
        this.loading = false;
        this.$store.dispatch('logout')

        if(err.response && err.response.data)
          this.$toast.error(err.response.data.message)
        else
          this.$toast.error(err.message)
      }) 
    },
    handleGoogle() {
      axios.post('auth/google/token', { }).then(res => {

      }).catch(err => {
        if(err.response && err.response.data)
          this.$toast.error(err.response.data.message)
        else
          this.$toast.error(err.message)
        console.log(err)
      })
    },
    handleFacebook() {
      axios.post('auth/google/token', { }).then(res => {

      }).catch(err => {
        if(err.response && err.response.data)
          this.$toast.error(err.response.data.message)
        else
          this.$toast.error(err.message)
        console.log(err)
      })
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
