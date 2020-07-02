import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '../store';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to, from) => {
    if (to.name ==='home') {
        //console.log('x');
    }
    store.isHeaderMenuOpened = false;
    store.isHeaderMenuContentShown = false;
    store.isMenuLinksShowed = false;
    store.isWelcomeScreenShowing = true;
    store.isModalShowed = false;
    store.isTeamModalShowed = false;
    store.isModalInnerShowed = false;
    store.isPageScrolled = false;
})

export default router
