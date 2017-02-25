import React from 'react';
import classNames from 'classnames';
import style from '../style/components/Button.css';

const Button = ({type, className = '', children}) => (
    <button type={type} className={classNames(style.button, className)}>
        {children}
    </button>
);

export default Button;
