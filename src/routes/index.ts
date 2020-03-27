import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/search',
		component: Search,
		exact: true,
	},
];

export default Routes;
