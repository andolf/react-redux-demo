import React from 'react';
import Form from './Form';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        const {onCancel} = this.props;
        return (
            <Form onSubmit={this.onSubmit} onCancel={onCancel}>
                <label>
                    <strong>E-mail:</strong>
                    <input type="text"/>
                </label>
                <label>
                    <strong>Password:</strong>
                    <input type="password"/>
                </label>
            </Form>
        );
    }
}
