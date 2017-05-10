import React from 'react';
import ReactModal from 'react-modal';
import Button from '../components/Button';
import style from '../style/components/Modal.css';

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
            <ReactModal {...this.props}>
                <ModalHeader {...this.props}>
                    {this.props.children}
                </ModalHeader>
            </ReactModal>
        );
    }
};
