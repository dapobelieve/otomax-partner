<template>
  <main>
    <auth-header />

    <router-view />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthHeader from '../components/AuthHeader'

export default {

  beforeMount() {
    if(this.isLoggedIn) {
      this.$router.push('/profile')
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isAuthenticated',
    })
  },
  components: {
    AuthHeader
  }
}
</script>
    AuthHeader