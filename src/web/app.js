import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import configureStore from '../core/redux/configureStore';
import './styl/main.styl'; // css entry point
import routes from './core/routing';

let state;
if (window.$REDUX_STATE) {
	state = window.$REDUX_STATE;
}

const store = configureStore(state);

render((
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
), document.getElementById('root'));
