import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from './middlewares/promiseMiddleware';
import combinedReducers from './reducers';
import DevTools from '../components/DevTools';

// toggle redux-devtool panel
window.$REDUX_DEVTOOL = false;

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  applyMiddleware(promiseMiddleware, logger),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(combinedReducers, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
