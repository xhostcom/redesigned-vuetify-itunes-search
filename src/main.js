import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import axios from "axios";

Vue.prototype.$http = axios;
Vue.prototype.axios = axios;


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
