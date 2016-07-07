import React from 'react';
import Menu from './Menu';

const Frame = ({children}) => (
	<div>
		<Menu />

		<div id='container'>
			{children}
		</div>
	</div>
);

export default Frame;
