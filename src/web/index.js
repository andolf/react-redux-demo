import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../core/redux/configureStore';
import './style/core/base.css';
import { Provider } from 'react-redux';
import Routes from './routes';

const state = window.$REDUX_STATE;
const store = configureStore(state);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept('./routes', () => {
    render();
  });
}

render();
