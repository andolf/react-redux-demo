import React from 'react';
import Button from './Button';
import style from '../style/components/Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, onSubmit, onCancel} = this.props;
        return (
            <form className={style.root} onSubmit={onSubmit}>
                {children}
                <div className={style.buttons}>
                    <Button type='submit' className={style.submit}>Submit</Button>
                    <Button type='reset' className={style.button}>Reset</Button>
                    {onCancel && <Button className={style.button} onClick={onCancel}>Cancel</Button>}
                </div>
            </form>
        );
    }
}
