import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '../store';
import AOS from 'aos';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    if (!store.state.isHeaderMenuOpened) {
        store.state.isRouteSheetVisible = true;
    } 

    setTimeout(() => {
        next();
    }, 400);
  })

router.afterEach((to, from) => {
    if (to.name ==='home') {
        //console.log('x');
    }
    setTimeout(() => {
        AOS.refresh();
    }, 1000);
    store.state.isHeaderMenuOpened = false;
    store.state.isHeaderMenuContentShown = false;
    store.state.isMenuLinksShowed = false;
    store.state.isWelcomeScreenShowing = true;
    store.state.isModalShowed = false;
    store.state.isTeamModalShowed = false;
    store.state.isModalInnerShowed = false;
    store.state.isPageScrolled = false;
    
    setTimeout(() => {
        store.state.isRouteSheetVisible = false;
    }, 500);
})

export default router;
