import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
const CaseSaldoDebts = () => import('../views/CaseSaldoDebts');
const CaseFindPhoto = () => import('../views/CaseFindPhoto');
const Contacts = () => import('../views/Contacts');
const About = () => import('../views/About');

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/saldo-debts',
				name: 'saldo-debts',
				component: CaseSaldoDebts
			},
			{
				path: '/musealbum',
				name: 'musealbum',
				component: CaseFindPhoto
			},
			{
				path: '/sohobook',
				name: 'sohobook',
				component: CaseFindPhoto
			},
			{
				path: '/power-place',
				name: 'power-place',
				component: CaseFindPhoto
			},
			{
				path: '/find-photo',
				name: 'find-photo',
				component: CaseFindPhoto
			},
			{
				path: '/gusli',
				name: 'gusli',
				component: CaseFindPhoto
			},
		]
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	},
	{
		path: '/about',
		name: 'about',
		component: About
	}
]

export default routes;
