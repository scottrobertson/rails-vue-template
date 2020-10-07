import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PageNotFound from './pages/errors/404.vue'
import HomeIndex from './pages/home/index.vue'
import PrivacyIndex from './pages/privacy/index.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/privacy', component: PrivacyIndex },
    { path: "*", component: PageNotFound }
  ]
})

export default router
