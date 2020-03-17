import TodoHome from '../pages/TodoHome';
import Test from '../pages/Test';

const routes = [
	{
		path: '/',
		component: Test,
		exact: true,
	},
	{
		// path: ['/', '/home'],
		path: '/home',
		component: TodoHome,
		exact: true,
	},
];

export default routes;
