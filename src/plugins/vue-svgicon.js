import Vue from 'vue';
import VueSvgIcon from 'vue-svgicon';
import '../icons';

// Default tag name is 'svgicon'
Vue.use(VueSvgIcon, {
	tagName: 'svgicon',
	isOriginalDefault: true,
});
