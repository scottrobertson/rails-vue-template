import Vue from 'vue/dist/vue.esm';
import router from '../routes.js';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

const app = new Vue({
  router,
}).$mount('#app')
