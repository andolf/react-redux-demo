import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from '../containers/Modal';
import Button from './Button';
import LoginForm from './LoginForm';
import style from '../style/components/Menu.css';

function Menu() {
  const [showLogin, setShowLogin] = useState(false);

  const onLoginClick = useCallback(() => {
    setShowLogin(true);
  });
  const onCloseModal = useCallback(() => {
    setShowLogin(false);
  });

  return (
    <nav className={style.root}>
      <div className={style.container}>
        <h1 className={style.logo}>
          <Link to="/">GameStore</Link>
        </h1>
        <ul className={style.list}>
          <li>
            <NavLink exact to="/" activeClassName={style.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={style.active}>
              About
            </NavLink>
          </li>
        </ul>
        <Button onClick={onLoginClick} className={style.login}>
          Login
        </Button>
      </div>

      <Modal
        isOpen={showLogin}
        contentLabel="Login"
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
        parentSelector={() => document.body}
      >
        <LoginForm onCancel={onCloseModal} />
      </Modal>
    </nav>
  );
}

export default Menu;
