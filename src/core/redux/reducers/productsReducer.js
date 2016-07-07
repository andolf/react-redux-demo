import {
	GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR
} from '../constants/actionTypes';

const INITIAL_STATE = {};

export function products(state = INITIAL_STATE, action) {
	const {type, payload} = action;

	switch (type) {
		case GET_PRODUCTS_SUCCESS:
			return payload;
		case GET_PRODUCTS_REQUEST:
		case GET_PRODUCTS_ERROR:
		default:
			return state;
	}
}
