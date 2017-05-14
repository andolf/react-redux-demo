import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Frame from './containers/Frame';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={Frame}>
            <IndexRoute component={Home}/>
            <Route path='products' component={Products} />
            <Route path='product/:id' component={Product}/>
            <Route path='about' components={About}/>
            <Route path='*' components={NotFound}/>
        </Route>
    </Router>
);

export default Routes;
