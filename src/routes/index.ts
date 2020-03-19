import Home from '../pages/Home';
import Test from '../pages/Test';

const routes = [
	{
		path: '/',
		component: Home,
		// component: Test,
		exact: true,
	},
	{
		// path: ['/', '/home'],
		// path: '/home',
		// component: TodoHome,
	},
];

export default routes;
