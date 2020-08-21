import Vue from 'vue'

import router from '../routes.js';

import '../axios_client.js';

import Layout from '../components/layout.vue'
import '../stylesheets/application.css'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(Layout),
    router,
  }).$mount()

  document.body.appendChild(app.$el)
})
