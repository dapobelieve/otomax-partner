import axios from "axios";
const VUE_APP_BASE_API_URL= `https://api.otomax.co.uk`

const instance = axios.create({
  baseURL: VUE_APP_BASE_API_URL
});

instance.interceptors.request.use(
  (config) => {
  	const noToken = ['/auth/signup', '/auth/login', '/auth/google']

  	if(!noToken.some(u => config.url.includes(u))) {
  		config.headers['Authorization'] = `Bearer ${localStorage.getItem('auth.token')}`
  	}

    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
  	return Promise.reject(error)
  }
);

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if(error.response.status === 401) {
    let prevRequest = error.config

    return instance.patch('/accounts/v0.1/auth/renew-token', {
      access_token: localStorage.getItem('auth.token'),
      refresh_token: localStorage.getItem('auth.refresh')
    }).then(res => {
      if(res.status === 200) {
        localStorage.setItem('auth.token', res.data.message.access_token)
        localStorage.setItem('auth.refresh', res.data.message.refresh_token)
        instance.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('auth.token')}`;
        return instance(prevRequest);
      }
    })
  }
  return Promise.reject({error})
});

class Api {
  static async get(url) {
    return await instance.get(url);
  }

  static async post(url, payload) {
    return await instance.post(url, payload)
  }

  static async patch(url, payload = {}, context=null) {
    return await instance.patch(url, payload, {
      onUploadProgress: (e) => {
        if(context) {
          context.progress = Math.round((e.loaded * 100) / e.total)
        }
      },
    });
  }

  static async delete(url, payload = {}) {
    return await instance.delete(url, { data: payload });
  }
}
export default Api;