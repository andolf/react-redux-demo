import {combineReducers} from 'redux';

// reducers
import * as user from './userReducer';

export default combineReducers({
	...user
})
