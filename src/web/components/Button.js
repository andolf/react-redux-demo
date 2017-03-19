import React from 'react';
import classNames from 'classnames';
import style from '../style/components/Button.css';

const Button = ({type = 'button', className = '', children, onClick}) => (
    <button onClick={onClick} type={type} className={classNames(style.button, className)}>
        {children}
    </button>
);

export default Button;
