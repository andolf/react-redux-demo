import React from 'react';
import ReactModal from 'react-modal';
import Button from '../components/Button';
import style from '../style/containers/Modal.css';

export class ModalHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, onRequestClose, contentLabel} = this.props;
        return (
            <div>
                <header className={style.header}>
                    <span className={style.text}>{contentLabel}</span>
                    {onRequestClose && <Button className={style.close} onClick={onRequestClose}>X</Button>}
                </header>
                {children}
            </div>
        );
    }
}

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactModal {...this.props} style={{
                content: {
                    borderRadius: '4px',
                    bottom: 'auto',
                    minHeight: '10rem',
                    left: '50%',
                    position: 'fixed',
                    right: 'auto',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    minWidth: '20rem',
                    width: '30rem',
                    maxWidth: '60rem'
                }
            }}>
                <ModalHeader {...this.props}>
                    {this.props.children}
                </ModalHeader>
            </ReactModal>
        );
    }
};
