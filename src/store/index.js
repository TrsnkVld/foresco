import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations: {
	},
	getters: {
		isHeaderMenuOpened: (state) => {
			return state.isHeaderMenuOpened;
		}
	},
	actions: {
	},
	modules: {
	}
});
