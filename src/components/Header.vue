<template>
  <main>
    <v-app-bar app color="white">
      <v-container class="d-flex align-center">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/images/logo-black.svg"
            transition="scale-transition"
            width="70"
          />
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <v-text-field
            placeholder="Search"
            filled
            rounded
            dense
            class="mt-7 mr-2"
            v-model='query'
            @change="handleSearch"
          ></v-text-field>
          <div class="icon-bg text-center ">
            <i class="fas fa-search ma-3 text-blue"></i>
          </div>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex">
          <router-link to="/" :class="{ active: currentRoute == 'Home' }">
            <i
              class="ml-8 fas fa-home text-decoration-none "
              style="width: 30px; height: 30px"
            ></i>
          </router-link>
          <router-link
            to="/vehicle/manager"
            :class="{ active: currentRoute == 'Vehicle Manager' }"
          >
            <i
              class="ml-8 fas fa-car text-decoration-none "
              style="width: 30px; height: 30px"
            ></i>
          </router-link>
          <router-link
            to="/notification"
            :class="{ active: currentRoute == 'Notify' }"
          >
            <i
              class="ml-8 fas fa-bell text-decoration-none "
              style="width: 30px; height: 30px"
            ></i>
          </router-link>
          <router-link
            to="/profile"
            :class="{ active: currentRoute == 'Profile' }"
          >
            <v-img
              src="../assets/images/handsome.png"
              height="38"
              width="38"
              class="rounded-circle ml-8"
            />
          </router-link>
          <otomax-menu 
            class="ml-8" 
            :class="{ active: currentRoute == 'Filter' }"
            :items='menuItems' 
          />
        </div>
      </v-container>
    </v-app-bar>
  </main>
</template>

<script>
import { EventBus } from '../utils/event-bus'
import OtomaxMenu from '@/components/OtomaxMenu'

export default {
  data() {
    return {
      query: '',
      menuItems: [
        { title: 'Switch Account', icon: require('@/assets/images/switch.png'), href: '#' },
        { title: 'Payment', icon: require('@/assets/images/card.png'), href: '#' },
        { title: 'History', icon: require('@/assets/images/clock.png'), href: '#' },
        { title: 'Contact Otomax', icon: require('@/assets/images/chat.png'), href: '#' },
        { title: "FAQ's", icon: require('@/assets/images/call.png'), href: '#' },
        { 
          title: 'Logout', 
          icon: require('@/assets/images/logout.png'), 
          href: '#', 
          action: () => { 
            this.$store.dispatch('logout').then( res => {
              this.$router.push('/account/login')
            })
          }, 
        },
      ],
    }
  },
  components: {
    OtomaxMenu,
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    handleSearch(evt) {
      EventBus.$emit('searchVehicles', this.query);
    },
  },
};
</script>

<style scoped>
.active {
  color: #2633ec;
}

.icon-bg {
  background-color: #ebebeb;
  width: 44px;
  height: 37px;
  border-radius: 12px;
}
</style>
