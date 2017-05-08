import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

test('Button renders with default type', () => {
    const component = renderer.create(
        <Button>Text</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
