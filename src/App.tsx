import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes';

function App() {
	return (
		<>
			<Switch>
				{Routes.map(({ path, component, exact }, index) => (
					<Route to={path} component={component} exact={exact} key={index} />
				))}
			</Switch>
		</>
	);
}

export default App;
