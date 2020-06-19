import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import './plugins/vue-awesome-swiper';
import './plugins/vue-svgicon';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';
import 'vue-svgicon/dist/polyfill';

import AOS from 'aos'
import 'aos/dist/aos.css'

import './scss/main.scss';

import Vue from 'vue';
import App from './App.vue';
import Mapbox from 'mapbox-gl-vue';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import store from './store';

const req = require.context('./components/elements/', true, /\.(js|vue)$/i);
req.keys().forEach(key => {

	const componentConfig = req(key)
	const componentName = key.match(/\w+/)[0];

	Vue.component(
		componentName,
		componentConfig.default || componentConfig
	  )
})


Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
    components: {
		'mapbox': Mapbox,
    },
	created() {
		AOS.init({
			offset: 90,
			duration: 1200,
			once: true,
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
