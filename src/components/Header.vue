<template>
  <div>
    <v-app-bar color="#ffff" app></v-app-bar>
    <v-app-bar app color="white">
      <v-container>
        <v-row align="center" justify-md="space-between">
          <v-col md="2">
            <v-img @click="$router.push({name: 'home'})" alt="Otomax Logo" class="shrink mr-2" width="120" contain src="../assets/images/logo-black.svg" transition="scale-transition"/>
          </v-col>
          <v-col md="4"  class="d-flex justify-end pe-0">
            <div class="d-flex align-center col-md-10 pe-0 justify-space-between"> 
              <template class="d-none">
                <div class="nav-item ">
                  <router-link to="/"> 
                    <img color="primary" width="23" :src="require('@/assets/images/nav/home.svg')" />
                  </router-link>
                </div>
                <div class="nav-item ">
                  <router-link :to="{name: 'vehicle-manager'}">
                    <v-img color="primary" width="32" class="mb-1" :src="require('@/assets/images/nav/vehicle.svg')" />
                  </router-link>
                </div>
                <div class="nav-item ">
                  <router-link :to="{name: 'notification'}">
                    <v-img color="primary" width="20" class="mb-1" :src="require('@/assets/images/nav/notification.svg')" />
                  </router-link>
                </div>
                <div class="nav-item ">
                  <UserAvatar class="cursor-pointer" @click.native="$router.push({name: 'profile'})" />
                </div>
              </template>
              <div class="nav-item">
                <v-menu elevation="0" left transition="slide-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img class="mb-2" v-bind="attrs" v-on="on" width="32" :src="require('@/assets/images/nav/icon-menu.svg')" />
                  </template>
                  <v-list>
                    <v-list-item class="px-6" v-for="(item, i) in menuItems" :key="i">
                      <v-list-item-title v-if="item.action" @click.prevent="item.action()">
                        <img style="" :src="item.icon" alt="">
                        {{ item.title }}
                      </v-list-item-title>
                      <v-list-item-title v-else @click="$router.push({name: `${item.href}`})">
                        <img style="" :src="item.icon" alt="">
                        {{ item.title }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { EventBus } from '../utils/event-bus'
import OtomaxMenu from '@/components/OtomaxMenu'

export default {
  data() {
    return {
      query: '',
      menuItems: [
        // { title: 'Switch Account', icon: require('@/assets/images/switch.png'), href: '#' },
        { title: 'Payment', icon: require('@/assets/images/card.png'), 
          href: 'payment-details' 
        },
        { title: 'History', icon: require('@/assets/images/clock.png'), href: '#' },
        { title: 'Contact Otomax', icon: require('@/assets/images/chat.png'), href: '#' },
        { title: "FAQ's", icon: require('@/assets/images/call.png'), href: '#' },
        { 
          title: 'Logout', 
          icon: require('@/assets/images/logout.png'), 
          href: '#', 
          action: () => { 
            console.log("clicked")
            this.$store.dispatch('auth/logout').then( res => {
              this.$router.push('/account/login')
            })
          }, 
        },
      ],
    }
  },
  components: {
    OtomaxMenu,
    UserAvatar: () => import("@/components/UserAvatarComponent")
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

<style lang="scss" scoped>
 .v-menu__content {
  top: 60px !important;
  box-shadow: -2px 0px 8px 5px #0000000d;
}
.v-list {
  .v-list-item {
    cursor: pointer;
    min-height: 40px;

    .v-list-item__title {
      font-size: 0.875rem !important;
      display: inline-flex;
      align-items: center;
      img {
        margin-right: 8px;
        height: 1rem !important;
        width: 1rem !important;
      }
    }
  }
}
</style>
