import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import router from "./router/routes.js";
import store from '@/store'
import Vuelidate from 'vuelidate';
import VueFriendlyIframe from 'vue-friendly-iframe';
import '@/utils/filters'

Vue.use(VueFriendlyIframe);
Vue.use(Vuelidate)


import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// import Swiper styles
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// import Swiper JS
import Swiper from 'swiper/bundle';



// Vuetify
import "@/assets/css/app.scss";
import vuetify from "@/plugins/vuetify";


// Vue toast Notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
  position: 'top-right',
  dismissible: true,
})

Vue .config.productionTip = false;
SwiperCore.use([Navigation, Pagination]);

new Vue({
  router,
  store,
  vuetify,
  Swiper,
  render: (h) => h(App),
}).$mount("#app");
