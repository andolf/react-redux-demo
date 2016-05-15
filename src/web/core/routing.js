import React from 'react'
import {Route} from 'react-router'
import TodoApp from '../components/Menu';
// import ProductsContainer from '../components/ProductsContainer';
// import ProductDetail from '../components/ProductDetail';
// import CartContainer from '../components/CartContainer';
import NotFound from '../components/NotFound';


// <Route path="/"
// 	   components={{main: ProductsContainer, cart: CartContainer}} />
// <Route path="/:id"
// components={{main: ProductDetail, cart: CartContainer}} />

export default (
	<Route component={TodoApp}>
		<Route path="*"
			   components={{main: NotFound, cart: null}}/>
	</Route>
);
