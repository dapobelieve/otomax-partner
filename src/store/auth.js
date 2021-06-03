import Api from "@/utils/Api"

const apiPath = '/accounts/api/v1.1';

export default {
	namespaced: true,
	state: {
	  token: null,
	  user: null,
	},
	getters: {
		user: (state) => state.user,
		authToken: (state) => state.token,
		isAuthenticated: (state) => {
			return state.user && state.token
		},
	},    
	mutations: {
		SET_TOKEN(state, token) { state.token = token; },
		clearToken(state) { state.token = '' },
		SET_USER(state, user) { state.user = user; },
		clearUser(state) { state.user = null },
		clearAuth(state) {
			state.user = null;
			state.token = '';
		},
	},
	actions: {
		async login({dispatch,  commit}, payload) {
			let res = await Api.post(`${apiPath}/auth/login`, payload, false)
			if(res.status === 200) {
				const {data} = res.data
				localStorage.setItem('auth.token', data.accessToken)
				localStorage.setItem('auth.refresh', data.refreshToken)
				commit('SET_TOKEN', data.accessToken);
				await dispatch('fetchAuthUser')
			}

			return res;
		},
		async register({}, payload) {
			return await Api.post(`${apiPath}/auth/signup`, payload)
		},
		async fetchAuthUser({commit}) {
			let res = await Api.get(`${apiPath}/users/me`) //signed, to include auth header
			
			if(res.status === 200) {
				const { data: user } = res.data
				commit('SET_USER', user)
			}

			return res;
		},
		async logout({commit}) {
			localStorage.clear();
			commit('clearAuth')
			return
		},
	}
};
