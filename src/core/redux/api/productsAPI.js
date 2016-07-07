import {fetchUrl} from './fetch';

export function fetchProducts() {
	return fetchUrl('/api/products');
}
