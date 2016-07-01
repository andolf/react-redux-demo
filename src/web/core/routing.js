import React from 'react';
import {Route} from 'react-router';
import About from '../components/About';
import Menu from '../components/Menu';
import NotFound from '../components/NotFound';

export default (
	<Route component={Menu}>
		<Route path='/about' components={About} />
		<Route path='*'
			   components={{main: NotFound}}/>
	</Route>
);
