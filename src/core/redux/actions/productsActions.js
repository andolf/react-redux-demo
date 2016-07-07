import * as types from '../constants/actionTypes';
import {fetchProducts} from '../api/productsAPI';

export function getProducts() {
	return {
		types: [types.GET_PRODUCTS_REQUEST, types.GET_PRODUCTS_SUCCESS, types.GET_PRODUCTS_ERROR],
		promise: fetchProducts()
	};
}
