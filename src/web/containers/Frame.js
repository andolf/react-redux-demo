import React from 'react';
import Menu from '../components/Menu';
import style from '../style/containers/Frame.css';

const Frame = ({children}) => (
    <div>
        <Menu />

        <div className={style.container}>
            {children}
        </div>
    </div>
);

export default Frame;
