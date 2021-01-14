import Vue from 'vue'
import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axiosConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(axiosConfig)

_axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),

)

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),

)

// eslint-disable-next-line no-shadow
Plugin.install = function (Vue) {
  // eslint-disable-next-line no-param-reassign
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      },
    },
    $axios: {
      get() {
        return _axios
      },
    },
  })
}

Vue.use(Plugin)

export default Plugin
