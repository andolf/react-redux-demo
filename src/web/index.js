import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../core/redux/configureStore';
import AppContainer from './components/AppContainer';

const state = window.$REDUX_STATE;
const store = configureStore(state);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<AppContainer store={store} />,
		MOUNT_NODE
	);
};

if (module.hot) {
	module.hot.accept('./routes', () => {
		render();
	});
}

render();
