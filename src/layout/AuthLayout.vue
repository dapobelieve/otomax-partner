<template>
  <main>
    <!-- <auth-header /> -->

    <router-view />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthHeader from '../components/AuthHeader'

export default {
  name: 'AuthHeader',
  beforeMount() {
    if(this.isLoggedIn) {
      this.$router.push('/')
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
