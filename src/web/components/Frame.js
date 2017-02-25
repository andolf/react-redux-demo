import React from 'react';
import Menu from './Menu';
import style from '../style/components/Frame.css';

const Frame = ({children}) => (
    <div>
        <Menu />

        <div className={style.container}>
            {children}
        </div>
    </div>
);

export default Frame;
