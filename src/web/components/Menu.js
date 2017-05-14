import React from 'react';
import {IndexLink, Link} from 'react-router';
import Modal from '../containers/Modal';
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
                <div className={style.container}>
                    <h1 className={style.logo}><IndexLink to='/'>GameStore</IndexLink></h1>
                    <ul className={style.list}>
                        <li><IndexLink to='/' activeClassName={style.active}>Home</IndexLink></li>
                        <li><Link to='/about' activeClassName={style.active}>About</Link></li>
                    </ul>
                    <Button onClick={this.onLoginClick} className={style.login}>Login</Button>
                </div>

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
