import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
const CaseSaldoDebts = () => import('../views/CaseSaldoDebts');
const CaseFindPhoto = () => import('../views/CaseFindPhoto');
const Contacts = () => import('../views/Contacts');

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
				path: '/find-photo',
				name: 'find-photo',
				component: CaseFindPhoto
			},
		]
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts
	}
]

export default routes;
