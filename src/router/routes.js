import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
const Contacts = () => import('../views/Contacts');
const About = () => import('../views/About');

/*
** CASES ********
*/

const CaseSaldoDebts = () => import('../views/cases/CaseSaldoDebts');
const CaseMuseAlbum = () => import('../views/cases/CaseMuseAlbum');
const CaseSohobook = () => import('../views/cases/CaseSohobook');
const CasePowerPlace = () => import('../views/cases/CasePowerPlace');
const CaseFindPhoto = () => import('../views/cases/CaseFindPhoto');
const CaseGusli = () => import('../views/cases/CaseGusli');
const CaseExample = () => import('../views/cases/CaseExample');

/*
************************
*/

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
				component: CaseMuseAlbum,
			},
			{
				path: '/sohobook',
				name: 'sohobook',
				component: CaseSohobook
			},
			{
				path: '/power-place',
				name: 'power-place',
				component: CasePowerPlace
			},
			{
				path: '/find-photo',
				name: 'find-photo',
				component: CaseFindPhoto
			},
			{
				path: '/gusli',
				name: 'gusli',
				component: CaseGusli
			},
			{
				path: '/example',
				name: 'example',
				component: CaseExample
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
