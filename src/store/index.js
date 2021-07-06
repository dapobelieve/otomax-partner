import Vue from "vue"
import Vuex from "vuex"

import auth from "./auth"
import vehicle from "./vehicle"
import payments from "./payments"
import notification from "./notification"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    vehicle,
    payments,
    notification
  },
  plugins: [ 
    createPersistedState({
      key: "otomax"
    }),
  ]  
});