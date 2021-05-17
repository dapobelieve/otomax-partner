import Vue from "vue"
import Vuex from "vuex"

import user from "./user"
import auth from "./auth"
import vehicle from "./vehicle"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    auth,
    vehicle
  },
  plugins: [ 
    createPersistedState({
      key: "otomax"
    }),
  ]  
});