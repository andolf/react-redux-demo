import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component {
	render() {
		return (
			<nav id='menu'>
				<h1 id='logo'>GameStore</h1>
				<button className='menu__mobile'>
					<span />
				</button>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
