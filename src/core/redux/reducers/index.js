import { combineReducers } from 'redux';

// reducers
import * as user from './userReducer';
import * as products from './productsReducer';

export default combineReducers({
  ...user,
  ...products,
});
