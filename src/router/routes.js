import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../views/Home');
const Contacts = () => import('../views/Contacts');
const Team = () => import('../views/Team');
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
//const CaseExample = () => import('../views/cases/CaseExample');

/*
************************
*/


const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: { title: 'Проекты' },
		children: [
			{
				path: '/saldo-debts',
				name: 'saldo-debts',
				component: CaseSaldoDebts,
				meta: { title: 'Saldo. Долги' },
			},
			{
				path: '/musealbum',
				name: 'musealbum',
				component: CaseMuseAlbum,
				meta: { title: 'Musealbum' },
			},
			{
				path: '/sohobook',
				name: 'sohobook',
				component: CaseSohobook,
				meta: { title: 'Sohobook' },
			},
			{
				path: '/power-place',
				name: 'power-place',
				component: CasePowerPlace,
				meta: { title: 'Power Place' },
			},
			{
				path: '/find-photo',
				name: 'find-photo',
				component: CaseFindPhoto,
				meta: { title: 'Find Photo' },
			},
			{
				path: '/gusli',
				name: 'gusli',
				component: CaseGusli,
				meta: { title: 'Gusli' },
			},
		]
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: Contacts,
		meta: { title: 'Контакты' },
	},
	{
		path: '/team',
		name: 'team',
		component: Team,
		meta: { title: 'Команда' },
	},
	{
		path: '/about',
		name: 'about',
		component: About,
		meta: { title: 'О нас' },
	}
]

export default routes;
