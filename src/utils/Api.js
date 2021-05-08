import axios from "axios";
import store from "@/store/index.js";

// console.log(store)

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
});

instance.interceptors.request.use(
  (config) => {
  	const noToken = ['/auth/signup', '/auth/login']

  	if(!noToken.some(u => config.url.includes(u))) {
  		config.headers.Authorization = `Bearer ${localStorage.getItem('auth.token')}`
  	}

    return config;
  },
  error => {
  	return Promise.reject(error)
  }
);

class Api {
  static async get(url) {
    return await instance.get(url);
  }

  static async post(url, payload) {
    return await instance.post(url, payload)
  }

  static async put(url, payload = {}) {
    return await instance.put(url, payload);
  }

  static async delete(url, payload = {}) {
    return await instance.delete(url, { data: payload });
  }
}
export default Api;