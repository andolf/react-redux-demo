import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Button renders with default type', () => {
    const component = renderer.create(
        <Button>Text</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
