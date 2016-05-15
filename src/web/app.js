import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import './styl/main.styl';

import App from './core/App';
import About from './core/About';

const Users = '';
const User = '';
const NotFound = '';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='about' component={About} />
            <Route path='users' component={Users}>
                <Route path='/user/:userId' component={User} />
            </Route>
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('root'));
