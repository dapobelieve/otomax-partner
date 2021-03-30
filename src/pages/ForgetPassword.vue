<template>
  <main class="bg-img">
    <v-img
      max-height="100%"
      style="opacity: 0.2"
      src="../assets/images/test-park.png"
    ></v-img>

    <div class="top-right">
      <div class="d-flex mb-12 ml-12">
        <h5 class="mr-4 mt-2">Already have an account?</h5>
        <router-link
          to="login"
          elevation="0"
          class="font-weight-light text-white"
        >
          <v-btn small color="#0D1040" class="text-white">Sign In</v-btn>
        </router-link>
      </div>
      <div class="bg-light-white pa-11 rounded" style="width: 448px">
        <div class="mb-9">
          <h4 class="font-weight-bold">Forget Password</h4>
          <small class="font-weight-light mt-2">Enter your email address below</small>
        </div>
        <form @submit.prevent="handleSubmit">
          <form-input placeholder="Email Address" v-model='email' required type='email' class="mb-8" />
          <v-btn large block color="primary" type='submit'>Send recovery link</v-btn>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import FormInput from "../components/forms/FormInput";
export default {
  data: () => ({
    email: '',
  }),
  components: {
    FormInput,
  },
  methods: {
    handleSubmit() {
      axios.post('auth/forgot-password', { email: this.email}).then(res => {
        console.log(res)
      }).catch(err => {
        if(err.response && err.response.data)
          this.$toast.error(err.response.data.message)
        else
          this.$toast.error(err.message)
      })
    }
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
