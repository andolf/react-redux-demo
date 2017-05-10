import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../core/redux/configureStore';
import Root from './containers/Root';
import './style/core/base.css';

const state = window.$REDUX_STATE;
const store = configureStore(state);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <Root store={store}/>,
        MOUNT_NODE
    );
};

if (module.hot) {
    module.hot.accept('./routes', () => {
        render();
    });
}

render();
