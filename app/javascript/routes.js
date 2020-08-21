import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const PageNotFound = () => import('./pages/errors/404.vue')
const HomeIndex = () => import('./pages/home/index.vue')
const PrivacyIndex = () => import('./pages/privacy/index.vue')

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/privacy', component: PrivacyIndex },
    { path: "*", component: PageNotFound }
  ]
});

export default router;
