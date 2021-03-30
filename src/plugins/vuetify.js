// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#2633EC',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            }
        }
    }
}

export default new Vuetify(opts)