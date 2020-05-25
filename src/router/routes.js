import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
const Case = () => import('../views/Case');
const Contacts = () => import('../views/Contacts');

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]

export default routes;
