/**
 * Route List
 */

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';
import Error from '../pages/Error';

const Routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/detail/:id',
		component: Detail
	},
	{
		path: '/search',
		component: Search,
	},
	{
		path: '*',
		component: Error
	}
];

export default Routes;
