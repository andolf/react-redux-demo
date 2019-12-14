import React from 'react';
import Menu from '../components/Menu';
import style from '../style/containers/Frame.css';

function Frame({ children }) {
  return (
    <>
      <Menu />

      <div className={style.container}>{children}</div>
    </>
  );
}

export default Frame;
