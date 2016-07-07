import {polyfill} from 'es6-promise';
import 'isomorphic-fetch';

polyfill();

export function fetchUrl(url) {
	return fetch(url)
		.then(response => response.json())
		.then(json => json)
		.catch(ex => console.error(ex));
}
