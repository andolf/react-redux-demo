import {LOGIN, LOGOUT} from '../constants/actionTypes';

const INITIAL_STATE = {};

export function user(state = INITIAL_STATE, action) {
	const {type, payload, error} = action;

	switch (type) {
		case LOGIN:
			return payload;
		case LOGOUT:
			return INITIAL_STATE;
		default:
			return state;
	}
}
