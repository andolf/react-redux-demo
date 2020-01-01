import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

test('Button renders with children', () => {
  const { container } = render(<Button>Text</Button>);
  expect(container.firstChild).toHaveTextContent('Text');
});

test('Button renders with default type', () => {
  const { container } = render(<Button>Text</Button>);
  expect(container.firstChild).toHaveAttribute('type', 'button');
});

test('Button renders with added class', () => {
  const { container } = render(<Button className="foo">Text</Button>);
  expect(container.firstChild).toHaveAttribute('class', 'foo');
});
