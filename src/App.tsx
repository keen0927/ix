import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{Routes.map(({ path, component, exact }, index) => (
					<Route path={path} component={component} exact={exact} key={index} />
				))}
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
