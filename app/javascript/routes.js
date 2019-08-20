import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import PageNotFound from './components/errors/404.vue';
import HomeIndex from './components/home/index.vue';
import PrivacyIndex from './components/privacy/index.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/privacy', component: PrivacyIndex },
    { path: "*", component: PageNotFound }
  ]
});

export default router;
