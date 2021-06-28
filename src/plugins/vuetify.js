import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
	theme: {
		options: { customProperties: true	},
		themes: {
			light: true,
			light: {
				primary: '#2633EC',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#13DBA4',
				warning: '#FFC107',
				light_grey: '#F9F9F9',
			}
		}
	}
}

export default new Vuetify(opts)