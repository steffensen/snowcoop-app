import VueRouter from 'vue-router';
import loginPage from './components/pages/login-page/login-page.component.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: loginPage
    },
  ]
});

export default router;