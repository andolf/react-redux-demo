import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Frame from './containers/Frame';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';
import About from './views/About';
import NotFound from './views/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Frame>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Frame>
    </Switch>
  </Router>
);

export default Routes;
