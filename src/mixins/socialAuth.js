import { BASE_URL, accountsBaseUrl, APP_DOMAIN }  from "@/utils/constants"

export default {
	methods: {
		async loginWithGoogle() {
      window.location = `${BASE_URL}${accountsBaseUrl}/auth/google?redirectUrl=${window.location.href}&domain=${APP_DOMAIN}`
    },
    stringToObject (string='', keySeparator="=", valueSeparator="; ") {
	    return string.split(valueSeparator).reduce((allCookies, cookie) => {
	      const data = cookie.split(keySeparator);
	      return { ...allCookies, ...{ [data[0]]: data[1] } };
	    }, {});
	  }
	},
	async mounted() {
		let allCookies = document.cookie
		// delete cookies on logout
		if(allCookies) {
			const socialCookies = this.stringToObject(allCookies)
			this.$store.dispatch('auth/setTokens', {
				accessToken: socialCookies.access_token,
				refreshToken: socialCookies.refresh_token
			})

			try {
				let res = await this.$store.dispatch('auth/fetchAuthUser');
				this.$router.replace({
					name: 'home'
				})
			}catch(e) {
				console.log({e})
			}
		}
	}
}