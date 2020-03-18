import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Routes from './routes';

function App() {
	return (
		<Router>
			<Switch>
				{Routes.map(({ path, component, exact }, index) => (
					<Route to={path} component={component} exact={exact} key={index} />
				))}
				<Redirect path="*" to="/" />
			</Switch>
		</Router>
	);
}

export default App;
