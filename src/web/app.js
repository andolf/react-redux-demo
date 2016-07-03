import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from '../core/redux/configureStore';
import './styl/main.styl'; // css entry point
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

let state;
if (window.$REDUX_STATE) {
	state = window.$REDUX_STATE;
}

const store = configureStore(state);

const App = ({children}) => (
	<div>
		<Menu />

		{children}
	</div>
);

const Home = () => (
	<h2>Home</h2>
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='about' components={About}/>
				<Route path='*' components={NotFound}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
