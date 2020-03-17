import TodoHome from '../pages/TodoHome';
import Test from '../pages/Test';

const routes = [
	{
		path: '/',
		component: TodoHome,
		// component: Test,
		exact: true,
	},
	{
		// path: ['/', '/home'],
		path: '/home',
		component: TodoHome
	}
];

export default routes;
