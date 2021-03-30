import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";

import user from './user'
import auth from './auth'
import vehicle from './vehicle'

Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [ 
    createPersistedState({
      storage: localStorage,
      paths:[
        "user","auth",
        "vehicle.hireRequest"
      ]
    }), 
  ],
  modules: {
    user,
    auth,
    vehicle,
  }
})