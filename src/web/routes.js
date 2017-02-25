import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Frame from './components/Frame';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={Frame}>
            <IndexRoute component={Home}/>
            <Route path='products' component={Products}>
                <Route path='/product/:id' component={Product}/>
            </Route>
            <Route path='about' components={About}/>
            <Route path='*' components={NotFound}/>
        </Route>
    </Router>
);

export default Routes;
