import axios from "axios";

const apiPath = '/accounts/api/v1.1';

export default {
    state: {
      token: localStorage.getItem('auth.token') || '',
      user: JSON.parse(localStorage.getItem('auth.user')) || null,
    },
    getters: {
        user: (state) => state.user,
        authToken: (state) => state.token,
        isAuthenticated: (state) => {
            return state.user && state.token
        },
    },    
    mutations: {
        setToken(state, token) { state.token = token; },
        clearToken(state) { state.token = '' },
        setUser(state, user) { state.user = user; },
        clearUser(state) { state.user = null },
        clearAuth(state) {
            state.user = null;
            state.token = '';
        },
    },

    actions: {
        login(store, payload) {
            return axios.post(apiPath + '/auth/login', payload).then( res => {
                const data = res.data.data
                localStorage.setItem('auth.token', data.accessToken)
                localStorage.setItem('auth.refresh', data.refreshToken)
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                store.commit('setToken', data.accessToken);
                store.dispatch('fetchAuthUser')
                return res.data;
            })
        },
        register(store, payload) {
            return axios.post(apiPath + '/auth/signup', payload)
        },
        fetchAuthUser(store) {
            return axios.get(apiPath + '/users/me').then(res => {
                localStorage.setItem('auth.user', JSON.stringify(res.data.data))
                store.commit('setUser', res.data.data)
            })
        },
        logout(store) {
            localStorage.clear();
            store.commit('clearAuth');
        },
    },
};
