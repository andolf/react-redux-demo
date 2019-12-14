import React from 'react';
import ReactModal from 'react-modal';
import Button from '../components/Button';
import style from '../style/containers/Modal.css';

ReactModal.setAppElement('#root');

export function ModalHeader({ children, onRequestClose, contentLabel }) {
  return (
    <div>
      <header className={style.header}>
        <span className={style.text}>{contentLabel}</span>
        {onRequestClose && (
          <Button className={style.close} onClick={onRequestClose}>
            X
          </Button>
        )}
      </header>
      {children}
    </div>
  );
}

export default function Modal(props) {
  return (
    <ReactModal
      {...props}
      style={{
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
          maxWidth: '60rem',
        },
      }}
    >
      <ModalHeader {...props}>{props.children}</ModalHeader>
    </ReactModal>
  );
}
