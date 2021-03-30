import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import axios from 'axios'

// import Swiper JS
import Swiper from 'swiper/bundle';

// import Swiper styles
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// Vue Router
import router from "./router";

// Vuex
import store from '@/store/index.js'

// Vuetify
import "@/assets/css/app.scss";
import vuetify from "@/plugins/vuetify";


import VueTransmit from "vue-transmit";

// Vue toast Notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { baseUrl } from './utils/constants'





Vue.use(VueToast, {
  position: 'top-right',
  dismissible: true,
})


// axios
window.axios = axios
axios.defaults.baseURL = baseUrl;

// Persist Auth
if(localStorage.getItem('auth.token'))
  axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem('auth.token');

Vue.use(VueTransmit)

Vue.use(Vuex);
Vue .config.productionTip = false;
SwiperCore.use([Navigation, Pagination]);

new Vue({
  router,
  store,
  vuetify,
  Swiper,
  render: (h) => h(App),
}).$mount("#app");
