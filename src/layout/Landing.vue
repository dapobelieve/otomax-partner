<template>
  <main>
    <Header />
    <router-view />
  </main>
</template>

<script>

import { mapGetters } from 'vuex'
import Header from '../components/Header'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isAuthenticated',
    })
  },
  beforeMount() {
    // if(!this.isLoggedIn) {
    //   this.$store.dispatch('logout')
    //   this.$router.push('/account/login')
    // }
  },
  components: {
    Header
  }
}
</script>