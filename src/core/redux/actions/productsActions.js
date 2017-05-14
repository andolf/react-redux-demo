import * as types from '../constants/actionTypes';
import {fetchProducts, fetchProduct} from '../api/productsAPI';

export function getProducts() {
	return {
		types: [types.GET_PRODUCTS_REQUEST, types.GET_PRODUCTS_SUCCESS, types.GET_PRODUCTS_ERROR],
		promise: fetchProducts()
	};
}

export function getProduct(id) {
    return {
        types: [types.GET_PRODUCT_REQUEST, types.GET_PRODUCT_SUCCESS, types.GET_PRODUCT_ERROR],
        promise: fetchProduct(id)
    };
}
