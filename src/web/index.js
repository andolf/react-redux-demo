import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../core/redux/configureStore';
import Root from './components/Root';
import './style/core/base.css';

const state = window.$REDUX_STATE;
const store = configureStore(state);

const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
    ReactDOM.render(
        <Root store={store} history={history}/>,
        document.getElementById('root')
    );
};

if (module.hot) {
    module.hot.accept('./routes', () => {
        render();
    });
}

render();
