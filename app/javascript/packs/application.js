import Vue from 'vue';
import router from '../routes.js';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  router,
}).$mount('#app')
