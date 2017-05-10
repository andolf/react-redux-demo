import React from 'react';
import {Route} from 'react-router';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Route path='/' component={Home}>
        <Route path='/products' component={Products}/>
        <Route path='/about' components={About}/>
        <Route components={NotFound}/>
    </Route>
);

export default Routes;
