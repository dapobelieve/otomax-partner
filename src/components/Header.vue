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
            to="/vendor"
            :class="{ active: currentRoute == 'Vendor' }"
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
          <router-link
            to="/filter"
            :class="{ active: currentRoute == 'Filter' }"
            class="ml-8"
          >
            <v-img
              src="../assets/images/icon-menu.svg"
              height="38"
              width="38"
            />
          </router-link>
        </div>
      </v-container>
    </v-app-bar>
  </main>
</template>

<script>
import { EventBus } from '../utils/event-bus'

export default {
  data: () => ({
    query: '',
  }),
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
