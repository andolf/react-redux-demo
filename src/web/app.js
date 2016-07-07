import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../core/redux/configureStore';
import './styl/main.styl'; // css entry point
import routes from './routes';

let state;
if (window.$REDUX_STATE) {
	state = window.$REDUX_STATE;
}

const store = configureStore(state);

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
