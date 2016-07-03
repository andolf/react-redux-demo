import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component {
	onClick() {
		alert("test");
	}

	render() {
		return (
			<nav id='menu'>
				<h1 id='logo'>MegaStore</h1>
				<button className='menu__mobile'>
					<span />
				</button>
				<ul onClick={this.onClick}>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
