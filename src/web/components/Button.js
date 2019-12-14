import React from 'react';
import classNames from 'classnames';
import style from '../style/components/Button.css';

function Button({ type = 'button', className = '', children, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(style.button, className)}
    >
      {children}
    </button>
  );
}

export default Button;
