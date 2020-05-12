import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import './plugins/vue-awesome-swiper';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

import AOS from 'aos'
import 'aos/dist/aos.css'

import './scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	created() {
		AOS.init({
			offset: 90,
			duration: 1200,
			//easing: 'ease-out-in',
			//delay: 100,
		})
		setTimeout(() => {
			AOS.refreshHard();
		}, 5000);
	},
	router,
	store,
	render: h => h(App)
}).$mount('#foresco')
