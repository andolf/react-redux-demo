import React from 'react';
import {NavLink} from 'react-router-dom';
import Modal from './Modal';
import Button from './Button';
import LoginForm from './LoginForm';
import style from '../style/components/Menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onLoginClick() {
        this.setState({
            showLogin: true
        });
    }

    onCloseModal() {
        this.setState({
            showLogin: false
        });
    }

    render() {
        return (
            <nav className={style.root}>
                <h1 className={style.logo}><NavLink exact to='/'>GameStore</NavLink></h1>
                <ul className={style.list}>
                    <li><NavLink exact to='/' activeClassName={style.active}>Home</NavLink></li>
                    <li><NavLink to='/about' activeClassName={style.active}>About</NavLink></li>
                </ul>
                <Button onClick={this.onLoginClick} className={style.login}>Login</Button>
                <Modal isOpen={this.state.showLogin}
                       contentLabel="Login"
                       onRequestClose={this.onCloseModal}
                       shouldCloseOnOverlayClick={true}
                       parentSelector={() => document.body}>
                    <LoginForm onCancel={this.onCloseModal}/>
                </Modal>
            </nav>
        );
    }
};
