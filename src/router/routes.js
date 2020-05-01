import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
//const About = () => import('../views/About')

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /*
    {
      path: '/about',
      name: 'About',
      component: About
    }
    */
  ]

export default routes;
