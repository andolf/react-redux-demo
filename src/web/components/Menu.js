import React from 'react';
import {Link} from 'react-router';
import style from '../style/components/Menu.css';

const Menu = () => (
    <nav id='menu' className={style.root}>
        <h1 id='logo' className={style.logo}>GameStore</h1>
        <ul className={style.list}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
);

export default Menu;
