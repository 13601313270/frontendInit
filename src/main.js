import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.interceptors.request.use(function(config) {
    // config.headers.ssoToken = a55d3e9c-3a93-4e03-9dbf-880b6acf2961
    return config
}, function(error) {
    return Promise.reject(error)
})

// common deal with response
axios.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    return Promise.reject(error)
})
// axios.defaults.baseURL = 'http://172.23.216.149:8080'
// axios.defaults.withCredentials = false
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
