import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

// reducers
import * as user from './userReducer';
import * as products from './productsReducer';

export default combineReducers({
    routing,
	...user,
	...products
});
