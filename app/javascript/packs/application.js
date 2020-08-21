import Vue from 'vue'
import router from '../routes.js';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Layout from '../components/layout.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(Layout),
    router,
  }).$mount()

  document.body.appendChild(app.$el)
})
