import {fetchUrl} from './fetch';

export function fetchProducts() {
	return fetchUrl('/api/products');
}

export function fetchProduct(id) {
    return fetchUrl('/api/product/' + id);
}
