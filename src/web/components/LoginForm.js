import React, { useCallback } from 'react';
import Form from './Form';

function LoginForm({ onCancel }) {
  const onSubmit = useCallback(e => {
    e.preventDefault();
  });

  return (
    <Form onSubmit={onSubmit} onCancel={onCancel}>
      <label>
        <strong>E-mail:</strong>
        <input type="text" />
      </label>
      <label>
        <strong>Password:</strong>
        <input type="password" />
      </label>
    </Form>
  );
}

export default LoginForm;
